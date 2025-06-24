/*
 * PROMPT COMPOSER - Product Requirements Document
 * ==============================================
 *
 * VISION & PURPOSE:
 * A visual prompt building tool that demonstrates the modular nature of effective prompts.
 * Like code components, prompts are "lego bricks" that combine to create powerful, cohesive instructions.
 * This tool makes visible the invisible architecture of well-crafted prompts while serving as a
 * practical utility for rapid prompt composition.
 *
 * TARGET USERS:
 * - Primary: Advanced prompt engineers and AI practitioners (especially me!)
 * - Secondary: Educators teaching prompt engineering concepts
 * - Tertiary: Curious users wanting to understand prompt structure
 *
 * CORE FUNCTIONALITY:
 *
 * 1. MODULAR SELECTION INTERFACE (Left Panel ~40% width):
 *    - Hierarchical checkbox system with collapsible sections
 *    - Categories include:
 *      └── Role Specification
 *          ├── Behavior Definition (Expert, Teacher, Assistant, Analyst, etc.)
 *          ├── Target Audience (Technical, General, Beginner, Advanced)
 *          └── Communication Style (Formal, Conversational, Academic, Creative)
 *      └── Context Provision
 *          ├── Data Types (Code, Documents, Images, Tables, JSON)
 *          ├── Input Framing ("The following is...", "Given this data...", "Based on...")
 *          └── Background Information (Domain context, Prior knowledge, Assumptions)
 *      └── Formatting Instructions
 *          ├── Output Format (Markdown, JSON, Plain text, Code blocks, HTML)
 *          ├── Structure (Numbered steps, Bullet points, Sections, Tables)
 *          └── Visual Hierarchy (Headers, Emphasis, Code formatting)
 *      └── Constraint Specifications
 *          ├── Length Limits (Word count, Character count, Paragraph limits)
 *          ├── Content Filters (Exclude certain topics, Focus areas)
 *          └── Scope Boundaries (What NOT to include, Time constraints)
 *      └── Re-prompt Specifications
 *          ├── Self-Improvement ("Improve this prompt", "Make it more specific")
 *          ├── Alternative Approaches ("Suggest better ways to ask this")
 *          └── Meta-Analysis ("Analyze the effectiveness of this prompt")
 *
 * 2. LIVE PREVIEW INTERFACE (Right Panel ~60% width):
 *    - Real-time compilation of selected prompt components
 *    - Color-coded sections showing different prompt elements:
 *      * Role specification (blue background)
 *      * Context provision (green background)
 *      * Formatting instructions (orange background)
 *      * Constraint specifications (purple background)
 *      * Re-prompt specifications (yellow background)
 *    - Copy-to-clipboard button (always visible, prominent)
 *    - Optional: Export to different formats (plain text, markdown, JSON)
 *
 * 3. EDUCATIONAL FEATURES:
 *    - Hover tooltips explaining why each component is useful
 *    - Visual connectors showing how sections flow together
 *    - Optional "deconstruct" mode for existing prompts (reverse engineering)
 *    - Template presets for common use cases (Code review, Content creation, Analysis)
 *
 * USER EXPERIENCE REQUIREMENTS:
 * - Zero loading time between selections (all client-side)
 * - Immediate visual feedback for every interaction
 * - Keyboard shortcuts for power users (Ctrl+C for copy, Space to toggle sections)
 * - Mobile responsive (stack panels vertically on small screens)
 * - Accessible (proper ARIA labels, keyboard navigation, screen reader support)
 * - Persistent state (remember selections across sessions via localStorage)
 *
 * TECHNICAL APPROACH:
 * - React functional component with hooks (useState, useEffect, useMemo)
 * - TypeScript interfaces for prompt component definitions
 * - CSS modules for styling with theme support (light/dark mode)
 * - Zustand or Context for state management if complexity grows
 * - Local storage for persistence
 * - Copy-to-clipboard API with fallback
 *
 * DATA STRUCTURE (Draft):
 * ```typescript
 * interface PromptComponent {
 *   id: string
 *   category: 'role' | 'context' | 'formatting' | 'constraints' | 'reprompt'
 *   label: string
 *   description: string
 *   template: string  // Template with optional placeholders
 *   dependencies?: string[]  // Other components this requires
 *   conflicts?: string[]     // Components this conflicts with
 *   priority: number         // Order in final prompt (lower = earlier)
 * }
 * ```
 *
 * PHASE 1 SCOPE (MVP):
 * - Basic checkbox interface with 5 main categories
 * - Simple concatenation of selected templates
 * - Copy to clipboard functionality
 * - Basic color coding in preview
 * - Mobile responsive layout
 *
 * FUTURE ENHANCEMENTS:
 * - Custom component creation (user can add their own templates)
 * - Prompt performance analytics (track which combinations work best)
 * - Integration with popular AI tools (ChatGPT, Claude, Cursor)
 * - Collaboration features (share prompt templates)
 * - A/B testing framework for prompt variants
 * - Import/export prompt libraries
 *
 * SUCCESS METRICS:
 * - Personal usage: Do I use this tool regularly for prompt creation?
 * - Educational value: Do users understand prompt structure better after using it?
 * - Practical utility: Does it save time vs manual prompt writing?
 * - Code quality: Is the component maintainable and extensible?
 *
 * DESIGN PHILOSOPHY:
 * "Make the invisible visible" - Users should see and understand the architecture
 * of their prompts, not just the final output. Every selection should feel
 * intentional and educational.
 *
 * ==============================================
 * DEVELOPMENT INSIGHTS & LESSONS LEARNED
 * ==============================================
 *
 * CRITICAL STYLING DISCOVERIES:
 *
 * 1. CSS SPECIFICITY CHALLENGES:
 *    - Tailwind classes can be overridden by parent component styles
 *    - When text styling changes don't appear, try inline styles to diagnose
 *    - Example: categoryLabel needed inline styles to override theme conflicts:
 *      style={{ fontSize: '16px', fontWeight: 'bold', color: 'inherit' }}
 *    - LESSON: For critical styling that must work, inline styles > CSS classes
 *
 * 2. THEME INTEGRATION PATTERNS:
 *    - next-themes integration requires careful function naming
 *    - Separate light/dark color functions for systematic theming:
 *      * getLightCategoryColor() - for light mode UI elements
 *      * getDarkCategoryColor() - for dark mode UI elements
 *      * getCurrentCategoryColor() - helper that switches based on theme
 *    - Use theme boolean flag for easy switching: isLightMode = theme === 'light'
 *    - LESSON: Explicit function naming prevents confusion during theme development
 *
 * 3. COMPONENT LAYOUT ARCHITECTURE:
 *    - Single-line layout: <checkbox /> <Title /> <Subtitle /> works best
 *    - Use border-b for clean separators: "border-b border-gray-200 last:border-b-0"
 *    - Flex containers with items-center for perfect alignment
 *    - LESSON: Simple layouts are more maintainable than complex nested structures
 *
 * 4. CLICKABLE AREA IMPLEMENTATION:
 *    - Native HTML <label> behavior > custom onClick handlers
 *    - Remove onClick from label, keep onChange on checkbox
 *    - Entire component row becomes clickable automatically
 *    - LESSON: Leverage native browser behavior instead of fighting it
 *
 * 5. VISUAL GROUPING STRATEGIES:
 *    - Vertical colored lines for category grouping (absolute positioning)
 *    - Background colors with transparency: backgroundColor + '20' suffix
 *    - Border colors with opacity: borderColor + '40' suffix
 *    - LESSON: Consistent opacity patterns create visual hierarchy
 *
 * 6. PREVIEW SECTION OPTIMIZATION:
 *    - Dark background (bg-gray-800) with light text (text-gray-300)
 *    - Darker category backgrounds for better contrast
 *    - Light category text colors for readability
 *    - LESSON: Dark themes need carefully chosen contrast ratios
 *
 * 7. CODE ORGANIZATION PRINCIPLES:
 *    - Centralize all CSS classes in promptComposerStyles object
 *    - Group by functional area (buttons, containers, text, etc.)
 *    - Use semantic naming that describes purpose, not appearance
 *    - LESSON: Organization at the top saves debugging time later
 *
 * 8. RESPONSIVE DESIGN CONSIDERATIONS:
 *    - Use lg: prefixes for desktop-specific layouts
 *    - Grid layouts with gap controls for even spacing
 *    - Flexible containers that stack on mobile
 *    - LESSON: Design mobile-first, enhance for desktop
 *
 * DEBUGGING WORKFLOW:
 * 1. CSS changes not appearing? Try inline styles first
 * 2. Theme colors wrong? Check function naming and theme boolean
 * 3. Click events not working? Verify native HTML behavior vs custom handlers
 * 4. Layout issues? Inspect flex/grid properties and overflow settings
 * 5. Text sizing problems? Force with inline fontSize as last resort
 *
 * AGENT HANDOFF NOTES:
 * - Component is fully functional with 5-category prompt building system
 * - Theming system works with light/dark mode switching
 * - All major styling issues have been resolved with documented solutions
 * - Model recommendation heuristic provides intelligent LLM suggestions
 * - Code is organized for easy maintenance and future enhancements
 * - Ready for production use and further feature development
 */

import React, { useState, useMemo } from 'react'
import { useTheme } from 'next-themes'

// CSS Classes for Prompt Composer
const promptComposerStyles = {
  // Base component styles
  container: 'container mx-auto p-4 md:p-6',
  title: 'text-2xl md:text-3xl font-bold mb-2 text-gray-800',
  subtitle: 'text-gray-600 mb-4 md:mb-6 text-sm md:text-base',
  mainLayout: 'flex flex-col lg:flex-row gap-4 md:gap-6 h-full',

  // Left panel styles
  leftPanel: 'lg:w-2/5 bg-white rounded-lg shadow-sm border p-4 md:p-6',
  leftPanelTitle: 'text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800',
  categoryContainer: 'mb-4',

  // Category button styles
  categoryButton:
    'flex items-center w-full p-3 text-inherit rounded-lg transition-colors duration-200 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
  categoryIcon: 'text-gray-900 mr-3 text-sm font-medium',
  categoryLabel: 'font-semibold text-base',

  // Expanded container styles
  expandedContainer: 'mt-1',
  componentContainer: 'border rounded-lg overflow-hidden',
  verticalLine: 'absolute left-0 top-0 bottom-0 w-1',
  componentsWrapper: 'relative pl-4',

  // Component item styles - Updated for single line layout
  componentWrapper: 'border-b border-gray-200 last:border-b-0 ',
  componentItem:
    'flex items-center p-3 hover:bg-white hover:bg-opacity-50 cursor-pointer transition-colors duration-150 group w-full',
  componentCheckbox:
    'h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3 flex-shrink-0',
  componentTextContainer: 'flex items-center flex-1 min-w-0',
  componentTitle:
    'text-sm text-gray-800 group-hover:text-gray-900 font-semibold mr-2',
  componentSubtitle: 'text-sm text-gray-600 font-normal',

  // Right panel styles
  rightPanel: 'lg:w-3/5 bg-white rounded-lg shadow-sm border p-4 md:p-6',
  rightPanelHeader:
    'flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2',
  rightPanelTitle: 'text-lg md:text-xl font-semibold text-gray-800',
  copyButton:
    'px-3 md:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm md:text-base font-medium',

  // Preview styles - Updated for dark theme
  previewContainer:
    'border rounded-lg min-h-64 md:min-h-96 p-3 md:p-4 bg-gray-800',
  previewContent: 'space-y-3',
  previewSection: 'p-4 rounded-lg border-l-4 space-y-3',
  previewCategoryHeader: 'text-xs font-semibold uppercase tracking-wider mb-2',
  previewComponentText: 'text-sm md:text-base text-gray-300 leading-relaxed',

  // Empty state styles - Updated for dark theme
  emptyState: 'text-center text-gray-400 mt-8 md:mt-12',
  emptyStateTitle: 'text-base md:text-lg',
  emptyStateSubtitle: 'text-sm text-gray-500 mt-2',

  // Statistics styles
  statisticsContainer:
    'mt-4 text-sm text-gray-600 grid grid-cols-3 gap-6 text-center justify-items-center w-full',

  // Cost analysis styles
  costContainer: 'mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200',
  costTitle: 'text-sm font-medium text-blue-800 mb-3',
  costTableWrapper: 'overflow-x-auto',
  costTable: 'w-full text-xs text-blue-700',
  costTableHeader: 'border-b border-blue-200',
  costTableHeaderCell: 'text-left py-1 px-2 font-medium',
  costTableHeaderCellRight: 'text-right py-1 px-2 font-medium',
  costTableCell: 'py-1 px-2',
  costTableCellRight: 'text-right py-1 px-2',

  // Analysis section styles
  analysisSection: 'mt-3 pt-2 border-t border-blue-300',
  analysisContent: 'text-xs text-blue-600 space-y-1',
  analysisHighlight: 'ml-2 text-blue-500',
}

// Updated prompt components for the new 5-category system
interface PromptComponent {
  id: string
  category: 'role' | 'context' | 'formatting' | 'constraints' | 'reprompt'
  label: string
  description: string
  template: string
  priority: number
}

const SAMPLE_COMPONENTS: PromptComponent[] = [
  // Role Specification components
  {
    id: 'role-expert',
    category: 'role',
    label: 'Subject Matter Expert',
    description: 'Deep domain expertise',
    template:
      'You are a subject matter expert with extensive knowledge and practical experience in your field.',
    priority: 1,
  },
  {
    id: 'role-teacher',
    category: 'role',
    label: 'Patient Educator',
    description: 'Teaching and explanation focus',
    template:
      'You are a patient and skilled educator who explains complex concepts clearly and adapts to different learning levels.',
    priority: 1,
  },
  {
    id: 'role-analyst',
    category: 'role',
    label: 'Critical Analyst',
    description: 'Analytical and methodical approach',
    template:
      'You are a critical analyst who examines information systematically and provides well-reasoned insights.',
    priority: 1,
  },
  {
    id: 'audience-technical',
    category: 'role',
    label: 'Technical Audience',
    description: 'Advanced technical knowledge assumed',
    template:
      'Assume your audience has strong technical background and can handle complex, detailed explanations.',
    priority: 2,
  },
  {
    id: 'audience-general',
    category: 'role',
    label: 'General Audience',
    description: 'Accessible to non-experts',
    template:
      'Explain concepts in accessible language suitable for a general audience without extensive technical background.',
    priority: 2,
  },

  // Context Provision components
  {
    id: 'context-code',
    category: 'context',
    label: 'Code Analysis Context',
    description: 'Code input preparation',
    template:
      'I will provide code that needs analysis. Please examine its structure, logic, performance, and potential improvements.',
    priority: 3,
  },
  {
    id: 'context-document',
    category: 'context',
    label: 'Document Processing',
    description: 'Text document input',
    template:
      'I will provide a document that requires processing. Please read it thoroughly and understand the key concepts and context.',
    priority: 3,
  },
  {
    id: 'context-data',
    category: 'context',
    label: 'Data Analysis Setup',
    description: 'Structured data input',
    template:
      'I will provide structured data (tables, JSON, etc.) that needs analysis. Please examine patterns, relationships, and insights.',
    priority: 3,
  },
  {
    id: 'context-background',
    category: 'context',
    label: 'Domain Background',
    description: 'Relevant background information',
    template:
      'Consider the broader domain context and industry standards when analyzing the provided information.',
    priority: 3,
  },

  // Formatting Instructions components
  {
    id: 'format-markdown',
    category: 'formatting',
    label: 'Markdown Format',
    description: 'Structured markdown output',
    template:
      'Format your response using proper markdown syntax with headers, lists, code blocks, and emphasis where appropriate.',
    priority: 4,
  },
  {
    id: 'format-steps',
    category: 'formatting',
    label: 'Step-by-Step Structure',
    description: 'Sequential numbered steps',
    template:
      'Structure your response as clear, numbered steps that can be followed sequentially.',
    priority: 4,
  },
  {
    id: 'format-sections',
    category: 'formatting',
    label: 'Section-Based Layout',
    description: 'Organized sections with headers',
    template:
      'Organize your response into distinct sections with clear headers for easy navigation.',
    priority: 4,
  },
  {
    id: 'format-code-blocks',
    category: 'formatting',
    label: 'Code Block Formatting',
    description: 'Proper code syntax highlighting',
    template:
      'Use properly formatted code blocks with syntax highlighting for any code examples or snippets.',
    priority: 4,
  },

  // Constraint Specifications components
  {
    id: 'constraint-concise',
    category: 'constraints',
    label: 'Concise Response',
    description: 'Brief and focused output',
    template:
      'Keep your response concise and focused on the essential points. Avoid unnecessary elaboration.',
    priority: 5,
  },
  {
    id: 'constraint-comprehensive',
    category: 'constraints',
    label: 'Comprehensive Coverage',
    description: 'Thorough and detailed analysis',
    template:
      'Provide a comprehensive analysis that covers all relevant aspects and edge cases thoroughly.',
    priority: 5,
  },
  {
    id: 'constraint-word-limit',
    category: 'constraints',
    label: 'Word Count Limit',
    description: 'Specific word count constraint',
    template:
      'Limit your response to approximately 300 words while maintaining clarity and completeness.',
    priority: 5,
  },
  {
    id: 'constraint-exclude-theory',
    category: 'constraints',
    label: 'Focus on Practical',
    description: 'Exclude theoretical background',
    template:
      'Focus on practical, actionable information. Avoid theoretical background or academic explanations.',
    priority: 5,
  },

  // Re-prompt Specifications components
  {
    id: 'reprompt-improve',
    category: 'reprompt',
    label: 'Prompt Improvement',
    description: 'Suggest prompt enhancements',
    template:
      'Before answering, suggest how this prompt could be improved for better clarity or more specific results.',
    priority: 6,
  },
  {
    id: 'reprompt-alternatives',
    category: 'reprompt',
    label: 'Alternative Approaches',
    description: 'Suggest different question formats',
    template:
      'Suggest alternative ways to frame this question that might yield more useful or comprehensive answers.',
    priority: 6,
  },
  {
    id: 'reprompt-analyze',
    category: 'reprompt',
    label: 'Prompt Analysis',
    description: 'Meta-analysis of the prompt',
    template:
      'Analyze the effectiveness of this prompt: what works well, what could be clearer, and what might be missing.',
    priority: 6,
  },
]

interface PromptComposerProps {
  className?: string
}

const PromptComposer: React.FC<PromptComposerProps> = ({ className }) => {
  const [selectedComponents, setSelectedComponents] = useState<Set<string>>(
    new Set()
  )
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  )

  const toggleComponent = (id: string) => {
    const newSelected = new Set(selectedComponents)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedComponents(newSelected)
  }

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(category)) {
      newExpanded.delete(category)
    } else {
      newExpanded.add(category)
    }
    setExpandedCategories(newExpanded)
  }

  const { composedPrompt, tokenCount } = useMemo(() => {
    const selectedComps = SAMPLE_COMPONENTS.filter((comp) =>
      selectedComponents.has(comp.id)
    ).sort((a, b) => a.priority - b.priority)

    const prompt = selectedComps.map((comp) => comp.template).join('\n\n')
    // Rough token estimate: ~4 characters per token
    const tokens = Math.ceil(prompt.length / 4)

    return { composedPrompt: prompt, tokenCount: tokens }
  }, [selectedComponents])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(composedPrompt)
      alert('Prompt copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Light theme category colors (for component selector and light mode preview)
  const getLightCategoryColor = (category: string) => {
    switch (category) {
      case 'role':
        return '#dbeafe' // light blue
      case 'context':
        return '#dcfce7' // light green
      case 'formatting':
        return '#fed7aa' // light orange
      case 'constraints':
        return '#e9d5ff' // light purple
      case 'reprompt':
        return '#fef3c7' // light yellow
      default:
        return '#f5f5f5'
    }
  }

  // Dark theme category colors (for dark mode preview sections)
  const getDarkCategoryColor = (category: string) => {
    switch (category) {
      case 'role':
        return '#1e3a8a' // dark blue
      case 'context':
        return '#166534' // dark green
      case 'formatting':
        return '#9a3412' // dark orange
      case 'constraints':
        return '#6b21a8' // dark purple
      case 'reprompt':
        return '#92400e' // dark amber
      default:
        return '#374151'
    }
  }

  const getCategoryBorderColor = (category: string) => {
    switch (category) {
      case 'role':
        return '#3b82f6' // blue-500
      case 'context':
        return '#22c55e' // green-500
      case 'formatting':
        return '#f97316' // orange-500
      case 'constraints':
        return '#a855f7' // purple-500
      case 'reprompt':
        return '#f59e0b' // amber-500
      default:
        return '#9ca3af'
    }
  }

  // Theme configuration - easily switchable
  const { theme } = useTheme()
  const isLightMode = theme === 'light'

  // Helper functions to get the appropriate colors based on theme
  const getCurrentCategoryColor = (category: string) =>
    isLightMode
      ? getLightCategoryColor(category)
      : getDarkCategoryColor(category)

  // Simple heuristic to recommend best model based on prompt characteristics
  const getModelRecommendation = () => {
    const selectedComps = SAMPLE_COMPONENTS.filter((comp) =>
      selectedComponents.has(comp.id)
    )

    const categoryCount = selectedComps.reduce(
      (acc, comp) => {
        acc[comp.category] = (acc[comp.category] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )

    const hasComplexReasoning =
      (categoryCount.constraints || 0) + (categoryCount.reprompt || 0) >= 2
    const isWritingFocused =
      (categoryCount.role || 0) + (categoryCount.formatting || 0) >= 3
    const isSimpleTask =
      tokenCount < 150 && Object.keys(categoryCount).length <= 2

    if (hasComplexReasoning || tokenCount > 400) {
      return {
        model: 'o3-mini',
        reason: 'Complex reasoning and meta-analysis tasks',
      }
    } else if (isWritingFocused || (categoryCount.role || 0) >= 2) {
      return {
        model: 'Claude 4 Sonnet',
        reason: 'Nuanced writing and role-based tasks',
      }
    } else if (isSimpleTask || tokenCount < 200) {
      return {
        model: 'Gemini 2.5 Pro',
        reason: 'Straightforward tasks with cost efficiency',
      }
    } else {
      return {
        model: 'Claude 4 Sonnet',
        reason: 'Balanced complexity and performance',
      }
    }
  }

  const categoryLabels = {
    role: '🎭 Role Specification',
    context: '📋 Context Provision',
    formatting: '📐 Formatting Instructions',
    constraints: '🎯 Constraint Specifications',
    reprompt: '🔄 Re-prompt Specifications',
  }

  const componentsByCategory = SAMPLE_COMPONENTS.reduce(
    (acc, comp) => {
      if (!acc[comp.category]) acc[comp.category] = []
      acc[comp.category].push(comp)
      return acc
    },
    {} as Record<string, PromptComponent[]>
  )

  return (
    <div className={className}>
      <div className={promptComposerStyles.container}>
        <h1 className={promptComposerStyles.title}>🧩 Prompt Composer</h1>
        <p className={promptComposerStyles.subtitle}>
          Prompts are modular, plaintext requests to complete an information
          task.
        </p>

        <div className={promptComposerStyles.mainLayout}>
          {/* Left Panel - Component Selection */}
          <div className={promptComposerStyles.leftPanel}>
            <h2 className={promptComposerStyles.leftPanelTitle}>
              Select Components
            </h2>

            {Object.entries(componentsByCategory).map(
              ([category, components]) => (
                <div
                  key={category}
                  className={promptComposerStyles.categoryContainer}
                >
                  {/* Category Header - Clean minimal button style with color coding */}
                  <button
                    onClick={() => toggleCategory(category)}
                    className={promptComposerStyles.categoryButton}
                    style={{
                      backgroundColor: getCurrentCategoryColor(category),
                      borderColor: getCategoryBorderColor(category) + '60',
                    }}
                  >
                    <span className={promptComposerStyles.categoryIcon}>
                      {expandedCategories.has(category) ? '▼' : '▶'}
                    </span>
                    <span
                      className={promptComposerStyles.categoryLabel}
                      style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: 'inherit',
                      }}
                    >
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </span>
                  </button>

                  {/* Category Components with Visual Grouping */}
                  {expandedCategories.has(category) && (
                    <div className={promptComposerStyles.expandedContainer}>
                      {/* Expanded container that encompasses all sub-components */}
                      <div
                        className={promptComposerStyles.componentContainer}
                        style={{
                          borderColor: getCategoryBorderColor(category) + '40',
                          backgroundColor:
                            getCurrentCategoryColor(category) + '20',
                        }}
                      >
                        {/* Vertical line for visual grouping */}
                        <div
                          className={promptComposerStyles.verticalLine}
                          style={{
                            backgroundColor: getCategoryBorderColor(category),
                          }}
                        />

                        <div className={promptComposerStyles.componentsWrapper}>
                          {components.map((comp) => (
                            <div
                              key={comp.id}
                              className={promptComposerStyles.componentWrapper}
                              style={{
                                backgroundColor:
                                  getCurrentCategoryColor(category),
                                borderColor:
                                  getCategoryBorderColor(category) + '60',
                              }}
                            >
                              <label
                                className={promptComposerStyles.componentItem}
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                }}
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedComponents.has(comp.id)}
                                  onChange={() => toggleComponent(comp.id)}
                                  className={
                                    promptComposerStyles.componentCheckbox
                                  }
                                />
                                <div
                                  className={
                                    promptComposerStyles.componentTextContainer
                                  }
                                >
                                  <span
                                    className={
                                      promptComposerStyles.componentTitle
                                    }
                                    style={{
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    {comp.label}
                                  </span>
                                  <span
                                    className={
                                      promptComposerStyles.componentSubtitle
                                    }
                                  >
                                    -{comp.description}
                                  </span>
                                </div>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Right Panel - Live Preview */}
          <div className={promptComposerStyles.rightPanel}>
            <div className={promptComposerStyles.rightPanelHeader}>
              <h2 className={promptComposerStyles.rightPanelTitle}>
                Live Preview
              </h2>
              <button
                onClick={copyToClipboard}
                disabled={!composedPrompt}
                className={promptComposerStyles.copyButton}
              >
                📋 Copy Prompt
              </button>
            </div>

            <div className={promptComposerStyles.previewContainer}>
              {composedPrompt ? (
                <div className={promptComposerStyles.previewContent}>
                  {Object.entries(
                    SAMPLE_COMPONENTS.filter((comp) =>
                      selectedComponents.has(comp.id)
                    )
                      .sort((a, b) => a.priority - b.priority)
                      .reduce(
                        (acc, comp) => {
                          if (!acc[comp.category]) acc[comp.category] = []
                          acc[comp.category].push(comp)
                          return acc
                        },
                        {} as Record<string, PromptComponent[]>
                      )
                  ).map(([category, components]) => (
                    <div key={category}>
                      <div
                        className={promptComposerStyles.previewSection}
                        style={{
                          backgroundColor: getCurrentCategoryColor(category),
                          borderLeftColor: getCategoryBorderColor(category),
                        }}
                      >
                        {components.map((comp) => (
                          <div
                            key={comp.id}
                            className={
                              promptComposerStyles.previewComponentText
                            }
                          >
                            {comp.template}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={promptComposerStyles.emptyState}>
                  <div className={promptComposerStyles.emptyStateSubtitle}>
                    Nothing selected. Choose from the categories to build your
                    prompt!
                  </div>
                </div>
              )}
            </div>

            {composedPrompt && (
              <>
                <div
                  className={promptComposerStyles.statisticsContainer}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>
                    <strong>Selected:</strong> {selectedComponents.size}{' '}
                  </span>
                  <span>
                    <strong>Characters:</strong> {composedPrompt.length}{' '}
                  </span>
                  <span>
                    <strong>Token count:</strong> {tokenCount}
                  </span>
                </div>
                <div className={promptComposerStyles.costContainer}>
                  <div className={promptComposerStyles.costTitle}>
                    Cost Estimates (per prompt)
                  </div>
                  <div className={promptComposerStyles.costTableWrapper}>
                    <table className={promptComposerStyles.costTable}>
                      <thead>
                        <tr className={promptComposerStyles.costTableHeader}>
                          <th
                            className={promptComposerStyles.costTableHeaderCell}
                          >
                            Model
                          </th>
                          <th
                            className={
                              promptComposerStyles.costTableHeaderCellRight
                            }
                          >
                            Cost
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className={promptComposerStyles.costTableCell}>
                            o3-mini
                          </td>
                          <td
                            className={promptComposerStyles.costTableCellRight}
                          >
                            ${((tokenCount / 1000) * 0.015).toFixed(4)}
                          </td>
                        </tr>
                        <tr>
                          <td className={promptComposerStyles.costTableCell}>
                            Claude 4 Sonnet
                          </td>
                          <td
                            className={promptComposerStyles.costTableCellRight}
                          >
                            ${((tokenCount / 1000) * 0.003).toFixed(4)}
                          </td>
                        </tr>
                        <tr>
                          <td className={promptComposerStyles.costTableCell}>
                            Gemini 2.5 Pro
                          </td>
                          <td
                            className={promptComposerStyles.costTableCellRight}
                          >
                            ${((tokenCount / 1000) * 0.00125).toFixed(4)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={promptComposerStyles.analysisSection}>
                    <div className={promptComposerStyles.analysisContent}>
                      <div>
                        <strong>Prompt Length:</strong>{' '}
                        {tokenCount < 100
                          ? 'Concise'
                          : tokenCount < 300
                            ? 'Moderate'
                            : 'Detailed'}
                        <span
                          className={promptComposerStyles.analysisHighlight}
                        >
                          (
                          {tokenCount < 100
                            ? 'Quick responses'
                            : tokenCount < 300
                              ? 'Balanced detail'
                              : 'Comprehensive instructions'}
                          )
                        </span>
                      </div>
                      <div>
                        <strong>Categories Used:</strong>{' '}
                        {
                          Object.keys(
                            SAMPLE_COMPONENTS.filter((comp) =>
                              selectedComponents.has(comp.id)
                            ).reduce(
                              (acc, comp) => {
                                acc[comp.category] = true
                                return acc
                              },
                              {} as Record<string, boolean>
                            )
                          ).length
                        }
                        /{Object.keys(componentsByCategory).length}
                        <span
                          className={promptComposerStyles.analysisHighlight}
                        >
                          (
                          {Object.keys(
                            SAMPLE_COMPONENTS.filter((comp) =>
                              selectedComponents.has(comp.id)
                            ).reduce(
                              (acc, comp) => {
                                acc[comp.category] = true
                                return acc
                              },
                              {} as Record<string, boolean>
                            )
                          ).length === Object.keys(componentsByCategory).length
                            ? 'Complete coverage'
                            : 'Partial coverage'}
                          )
                        </span>
                      </div>
                      {(() => {
                        const recommendation = getModelRecommendation()
                        return (
                          <div>
                            <strong>Recommended Model:</strong>{' '}
                            {recommendation.model}
                            <span
                              className={promptComposerStyles.analysisHighlight}
                            >
                              ({recommendation.reason})
                            </span>
                          </div>
                        )
                      })()}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromptComposer
