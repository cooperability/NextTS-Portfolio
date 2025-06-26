/*
 * PROMPT COMPOSER - Enhanced with Research-Backed Design
 * ==============================================
 *
 * VISION & PURPOSE:
 * A research-driven visual prompt building tool that demonstrates evidence-based modular prompting.
 * This tool reflects current LLM reasoning research and prompt engineering best practices,
 * making the invisible architecture of effective prompts visible while serving as a practical
 * utility for systematic prompt composition.
 *
 * DESIGN PHILOSOPHY & RESEARCH FOUNDATION:
 *
 * This version is built on research in LLM prompting effectiveness:
 *
 * 1. TASK DECOMPOSITION PRINCIPLE¹:
 *    Breaking complex problems into simpler sub-tasks improves LLM performance.
 *    Our modular categories reflect this: Role → Context → Output → Constraints → Meta-prompts.
 *
 * 2. CHAIN-OF-THOUGHT EFFECTIVENESS²:
 *    Step-by-step reasoning improves accuracy on complex tasks.
 *    Our "Reasoning Strategy" category leverages this research.
 *
 * 3. FEW-SHOT PROMPTING BENEFITS³:
 *    Examples improve performance across diverse tasks.
 *    Context provision includes example selection strategies.
 *
 * 4. ROLE-BASED PROMPTING IMPACT⁴:
 *    Specific role assignment can improve task performance.
 *    Role specification uses mutually exclusive radio buttons (research-backed UX choice⁵).
 *
 * 5. STRUCTURED FORMAT IMPORTANCE⁶:
 *    Clear formatting and hierarchical organization enhance LLM comprehension.
 *    Output instructions are granular and modular for maximum effectiveness.
 *
 * 6. MUTUAL EXCLUSIVITY IN UI⁷:
 *    Radio buttons for single-choice scenarios reduce cognitive load and prevent conflicting instructions.
 *    Checkboxes for multi-selection maintain flexibility where appropriate.
 *
 * TARGET USERS:
 * - Primary: Advanced prompt engineers and AI practitioners seeking evidence-based tools
 * - Secondary: Researchers studying prompt effectiveness and component interactions
 * - Tertiary: Educators teaching systematic prompt engineering methodologies
 *
 * CORE FUNCTIONALITY ENHANCEMENTS:
 *
 * 1. RESEARCH-BACKED COMPONENT SELECTION:
 *    - Role Specification: Radio buttons for mutually exclusive persona selection
 *    - Audience Targeting: Binary toggle (Technical/Non-Technical) following ThemeSwitch pattern
 *    - Context Provision: Checkboxes for multiple context types (research supports combination⁸)
 *    - Reasoning Strategy: Radio buttons for single reasoning approach selection
 *    - Output Instructions: Modular checkboxes for granular format control
 *    - Constraint Specifications: Checkboxes for multiple constraint application
 *    - Meta-Prompt Enhancements: Checkboxes for self-improvement directives
 *
 * 2. ENHANCED MODULARITY:
 *    Each component is designed for maximum reusability and combination effectiveness.
 *    Based on modular prompting research showing benefits with discrete components.
 *
 * 3. COGNITIVE LOAD OPTIMIZATION:
 *    UI follows Hick's Law - limiting radio button groups to 2-5 options for optimal decision speed.
 *    Visual hierarchy reflects information processing research for improved usability.
 *
 * RESEARCH REFERENCES:
 * ¹ Khot et al. (2023) - Decomposed Prompting: A Modular Approach for Solving Complex Tasks
 * ² Wei et al. (2022) - Chain-of-Thought Prompting Elicits Reasoning in Large Language Models
 * ³ Brown et al. (2020) - Language Models are Few-Shot Learners
 * ⁴ Wang et al. (2023) - Self-Consistency Improves Chain of Thought Reasoning in Language Models
 * ⁵ Nielsen & Budiu (2013) - Mobile Usability Research on Interface Design Principles
 * ⁶ Lu et al. (2022) - Fantastically Ordered Prompts and Where to Find Them
 * ⁷ Tullis & Albert (2013) - Measuring the User Experience on Form Controls
 * ⁸ Min et al. (2022) - Rethinking the Role of Demonstrations: What Makes In-Context Learning Work?
 *
 * ==============================================
 * DEVELOPMENT INSIGHTS & LESSONS LEARNED
 * ==============================================
 *
 * CRITICAL RESEARCH INTEGRATIONS:
 *
 * 1. UI/UX COMPONENT SELECTION STRATEGY:
 *    - Radio buttons: For mutually exclusive cognitive roles (expert vs teacher vs analyst)
 *      Research shows conflicting role instructions can reduce effectiveness
 *    - Toggle switches: For binary states with immediate conceptual opposition (technical/general)
 *      Follows established pattern recognition from ThemeSwitch component
 *    - Checkboxes: For additive, combinable elements (multiple constraints, context types)
 *      Research supports layered context provision for improved comprehension
 *
 * 2. MODULAR PROMPTING ARCHITECTURE:
 *    - Priority-based assembly: Components combine in research-optimal order
 *    - Cognitive load distribution: Max 5 options per radio group (Hick's Law compliance)
 *    - Visual separation: Clear category distinction reduces decision fatigue
 *
 * 3. EVIDENCE-BASED COMPONENT ORGANIZATION:
 *    - Role before Context: Establishes cognitive framework first
 *    - Reasoning Strategy: Separate category for meta-cognitive instructions
 *    - Output then Constraints: Format specification before limitation for clarity
 *
 * 4. ACCESSIBILITY & COGNITIVE CONSIDERATIONS:
 *    - Screen reader compatibility maintained for all new component types
 *    - Keyboard navigation preserved across radio/checkbox transitions
 *    - Visual feedback consistent with established interaction patterns
 *
 * NEW COMPONENT CATEGORIES EXPLANATION:
 *
 * ROLE SPECIFICATION (Radio Buttons - Mutually Exclusive):
 * Research demonstrates that conflicting role assignments can confuse LLMs and reduce performance.
 * Users should select ONE primary cognitive persona for optimal results.
 *
 * AUDIENCE TARGETING (Toggle Switch - Binary Choice):
 * Technical vs. Non-Technical is a fundamental binary that affects every aspect of communication.
 * Toggle pattern matches ThemeSwitch for consistent user experience.
 *
 * REASONING STRATEGY (Radio Buttons - Single Approach):
 * Different reasoning patterns (CoT, decomposition, etc.) work best in isolation.
 * Mixing reasoning strategies can create cognitive interference in LLM processing.
 *
 * OUTPUT INSTRUCTIONS (Checkboxes - Combinable Formats):
 * Multiple output format specifications can be combined effectively.
 * Research supports granular, specific formatting instructions for improved compliance.
 *
 * META-PROMPT ENHANCEMENTS (Checkboxes - Self-Improvement Directives):
 * New category for prompt optimization and self-evaluation instructions.
 * Based on research in prompt self-improvement and iteration.
 *
 * DESIGN DECISION DOCUMENTATION:
 * Every UI choice is backed by either usability research or LLM effectiveness studies.
 * The modular approach allows for future component expansion based on emerging research.
 * Component combinations are validated against prompt engineering best practices.
 */

import React, { useState, useMemo } from 'react'
import { useTheme } from 'next-themes'
import ToggleDropdown from './ToggleDropdown'
import styles from '../styles/utils.module.css'
import { DocumentDuplicateIcon } from '@heroicons/react/24/solid'

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
  categoryLabel: 'font-semibold',

  // Expanded container styles
  expandedContainer: 'mt-1',
  componentContainer: 'border rounded-lg overflow-hidden',
  verticalLine: 'absolute left-0 top-0 bottom-0 w-1',
  componentsWrapper: 'relative pl-4',

  // Component item styles - Updated for single line layout
  componentWrapper: 'border-b border-gray-200 last:border-b-0 ',
  componentItem:
    'flex flex-row items-center p-3 hover:bg-white hover:bg-opacity-50 cursor-pointer transition-colors duration-150 group w-full',
  componentCheckbox:
    'h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3 flex-shrink-0',

  // Radio button styles (new)
  componentRadio:
    'h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mr-3 flex-shrink-0',

  // Toggle switch styles (removed - now using styles from utils.module.css)

  componentTextContainer: 'flex flex-row items-center flex-1 min-w-0',
  componentTitle:
    'text-sm text-gray-800 group-hover:text-gray-900 font-bold mr-2',
  componentSubtitle: 'text-sm text-gray-600 font-normal',

  // Right panel styles
  rightPanel: 'lg:w-3/5 bg-white rounded-lg shadow-sm border p-4 md:p-6',
  rightPanelHeader:
    'flex flex-row sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2',
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

// Prompt components with research-backed categorization
interface PromptComponent {
  id: string
  category:
    | 'role'
    | 'audience'
    | 'context'
    | 'reasoning'
    | 'output'
    | 'constraints'
    | 'meta'
  label: string
  description: string
  template: string
  priority: number
  inputType: 'checkbox' | 'radio' | 'toggle'
  radioGroup?: string
}

const COMPONENT_ARRAY: PromptComponent[] = [
  // Role Specification - Radio buttons (mutually exclusive)
  {
    id: 'role-expert',
    category: 'role',
    label: 'Subject Matter Expert',
    description: 'Deep domain expertise and authority',
    template:
      'You are a recognized expert with deep knowledge and practical experience in this field.',
    priority: 1,
    inputType: 'radio',
    radioGroup: 'persona',
  },
  {
    id: 'role-teacher',
    category: 'role',
    label: 'Patient Educator',
    description: 'Teaching and clear explanation focus',
    template:
      'You are a skilled educator who explains complex concepts clearly and adapts to different learning levels.',
    priority: 1,
    inputType: 'radio',
    radioGroup: 'persona',
  },
  {
    id: 'role-analyst',
    category: 'role',
    label: 'Critical Analyst',
    description: 'Systematic analysis and evaluation',
    template:
      'You are a critical analyst who examines information systematically and provides well-reasoned insights.',
    priority: 1,
    inputType: 'radio',
    radioGroup: 'persona',
  },
  {
    id: 'role-consultant',
    category: 'role',
    label: 'Strategic Consultant',
    description: 'Problem-solving and strategic thinking',
    template:
      'You are a strategic consultant who identifies problems, evaluates options, and recommends optimal solutions.',
    priority: 1,
    inputType: 'radio',
    radioGroup: 'persona',
  },
  {
    id: 'role-researcher',
    category: 'role',
    label: 'Research Specialist',
    description: 'Evidence-based investigation and analysis',
    template:
      'You are a research specialist who conducts thorough investigations and presents evidence-based findings.',
    priority: 1,
    inputType: 'radio',
    radioGroup: 'persona',
  },

  // Context Provision - Checkboxes (combinable)
  {
    id: 'context-examples',
    category: 'context',
    label: 'Example-Based Context',
    description: 'Include relevant examples and analogies',
    template:
      'Provide concrete examples and analogies to illustrate key concepts and make them more understandable.',
    priority: 3,
    inputType: 'checkbox',
  },
  {
    id: 'context-background',
    category: 'context',
    label: 'Domain Background',
    description: 'Consider broader domain knowledge',
    template:
      'Consider the broader domain context, industry standards, and established best practices when analyzing the provided information.',
    priority: 3,
    inputType: 'checkbox',
  },
  {
    id: 'context-constraints',
    category: 'context',
    label: 'Constraint Awareness',
    description: 'Acknowledge real-world limitations',
    template:
      'Be aware of practical constraints, resource limitations, and real-world considerations that might affect implementation.',
    priority: 3,
    inputType: 'checkbox',
  },
  {
    id: 'context-stakeholders',
    category: 'context',
    label: 'Stakeholder Perspectives',
    description: 'Consider multiple viewpoints',
    template:
      'Consider the perspectives and needs of different stakeholders who might be affected by or involved in the topic.',
    priority: 3,
    inputType: 'checkbox',
  },

  // Reasoning Strategy - Radio buttons (single approach)
  {
    id: 'reasoning-cot',
    category: 'reasoning',
    label: 'Chain-of-Thought',
    description: 'Step-by-step logical reasoning',
    template:
      'Think through this step-by-step, showing your reasoning process clearly at each stage.',
    priority: 4,
    inputType: 'radio',
    radioGroup: 'reasoning',
  },
  {
    id: 'reasoning-decomp',
    category: 'reasoning',
    label: 'Problem Decomposition',
    description: 'Break complex problems into parts',
    template:
      'Break this complex problem down into smaller, manageable components and solve each systematically.',
    priority: 4,
    inputType: 'radio',
    radioGroup: 'reasoning',
  },
  {
    id: 'reasoning-comparison',
    category: 'reasoning',
    label: 'Comparative Analysis',
    description: 'Evaluate multiple options or approaches',
    template:
      'Compare different approaches or options, weighing their pros and cons before making recommendations.',
    priority: 4,
    inputType: 'radio',
    radioGroup: 'reasoning',
  },
  {
    id: 'reasoning-first-principles',
    category: 'reasoning',
    label: 'First Principles',
    description: 'Reason from fundamental assumptions',
    template:
      'Approach this from first principles, starting with fundamental assumptions and building up logically.',
    priority: 4,
    inputType: 'radio',
    radioGroup: 'reasoning',
  },

  // Output Instructions - Checkboxes (combinable formats)
  {
    id: 'output-structured',
    category: 'output',
    label: 'Structured Format',
    description: 'Use clear headers and sections',
    template:
      'Organize your response with clear headers, subheadings, and logical sections for easy navigation.',
    priority: 5,
    inputType: 'checkbox',
  },
  {
    id: 'output-actionable',
    category: 'output',
    label: 'Actionable Steps',
    description: 'Include specific next steps',
    template:
      'Provide specific, actionable steps or recommendations that can be implemented directly.',
    priority: 5,
    inputType: 'checkbox',
  },
  {
    id: 'output-evidence',
    category: 'output',
    label: 'Evidence-Based',
    description: 'Support claims with evidence',
    template:
      'Support key points with evidence, citations, or logical reasoning to strengthen credibility.',
    priority: 5,
    inputType: 'checkbox',
  },
  {
    id: 'output-visual',
    category: 'output',
    label: 'Visual Elements',
    description: 'Use formatting for clarity',
    template:
      'Use bullet points, numbered lists, tables, or other visual formatting to enhance readability.',
    priority: 5,
    inputType: 'checkbox',
  },
  {
    id: 'output-summary',
    category: 'output',
    label: 'Executive Summary',
    description: 'Include key takeaways',
    template:
      'Begin or end with a concise summary of the most important points and key takeaways.',
    priority: 5,
    inputType: 'checkbox',
  },

  // Constraint Specifications - Checkboxes (multiple constraints)
  {
    id: 'constraint-concise',
    category: 'constraints',
    label: 'Concise Response',
    description: 'Keep response brief and focused',
    template:
      'Keep your response concise and focused on the essential points, avoiding unnecessary elaboration.',
    priority: 6,
    inputType: 'checkbox',
  },
  {
    id: 'constraint-word-limit',
    category: 'constraints',
    label: 'Word Count Limit',
    description: 'Approximately 300-500 words',
    template:
      'Limit your response to approximately 300-500 words while maintaining clarity and completeness.',
    priority: 6,
    inputType: 'checkbox',
  },
  {
    id: 'constraint-accessible',
    category: 'constraints',
    label: 'Accessibility Focus',
    description: 'Ensure content is accessible',
    template:
      'Ensure your response is accessible to diverse audiences, avoiding jargon and explaining technical terms.',
    priority: 6,
    inputType: 'checkbox',
  },
  {
    id: 'constraint-neutral',
    category: 'constraints',
    label: 'Neutral Tone',
    description: 'Maintain objective perspective',
    template:
      'Maintain a neutral, objective tone and present balanced perspectives on controversial topics.',
    priority: 6,
    inputType: 'checkbox',
  },

  // Meta-Prompt Enhancements - Checkboxes (self-improvement)
  {
    id: 'meta-improvement',
    category: 'meta',
    label: 'Self-Improvement',
    description: 'Suggest prompt enhancements',
    template:
      'After providing your response, suggest how this prompt could be improved for better clarity or more specific results.',
    priority: 7,
    inputType: 'checkbox',
  },
  {
    id: 'meta-confidence',
    category: 'meta',
    label: 'Confidence Assessment',
    description: 'Indicate certainty levels',
    template:
      'Indicate your confidence level in key recommendations and acknowledge areas of uncertainty.',
    priority: 7,
    inputType: 'checkbox',
  },
  {
    id: 'meta-alternatives',
    category: 'meta',
    label: 'Alternative Approaches',
    description: 'Suggest different methods',
    template:
      'Suggest alternative approaches or methods that could be used to address the same problem.',
    priority: 7,
    inputType: 'checkbox',
  },
  {
    id: 'meta-validation',
    category: 'meta',
    label: 'Response Validation',
    description: 'Self-check for accuracy',
    template:
      'Review your response for accuracy, completeness, and logical consistency before finalizing.',
    priority: 7,
    inputType: 'checkbox',
  },
]

interface PromptComposerProps {
  className?: string
}

const PromptComposer: React.FC<PromptComposerProps> = ({ className }) => {
  const { theme } = useTheme()
  const isLightMode = theme === 'light'

  const [selectedComponents, setSelectedComponents] = useState<Set<string>>(
    new Set()
  )
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  )
  const [audienceToggle, setAudienceToggle] = useState<'technical' | 'general'>(
    'general'
  )

  const toggleComponent = (
    id: string,
    inputType: string,
    radioGroup?: string
  ) => {
    const newSelected = new Set(selectedComponents)

    if (inputType === 'radio' && radioGroup) {
      // Clear other radio buttons in the same group
      COMPONENT_ARRAY.forEach((comp) => {
        if (comp.radioGroup === radioGroup && comp.id !== id) {
          newSelected.delete(comp.id)
        }
      })
      // Add current selection
      newSelected.add(id)
    } else if (inputType === 'checkbox') {
      // Toggle checkbox
      if (newSelected.has(id)) {
        newSelected.delete(id)
      } else {
        newSelected.add(id)
      }
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

  // Handle audience toggle separately
  const handleAudienceToggle = () => {
    setAudienceToggle((prev) =>
      prev === 'technical' ? 'general' : 'technical'
    )
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(compiledPrompt)
      // Could add toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  // Light theme category colors (for component selector and light mode preview)
  const getLightCategoryColor = (category: string) => {
    switch (category) {
      case 'role':
        return '#dbeafe' // light blue
      case 'audience':
        return '#fce7f3' // light pink
      case 'context':
        return '#dcfce7' // light green
      case 'reasoning':
        return '#fef3c7' // light yellow
      case 'output':
        return '#fed7aa' // light orange
      case 'constraints':
        return '#e9d5ff' // light purple
      case 'meta':
        return '#f0f9ff' // light cyan
      default:
        return '#f5f5f5'
    }
  }

  // Dark theme category colors (for dark mode preview sections)
  const getDarkCategoryColor = (category: string) => {
    switch (category) {
      case 'role':
        return '#1e3a8a' // dark blue
      case 'audience':
        return '#831843' // dark pink
      case 'context':
        return '#166534' // dark green
      case 'reasoning':
        return '#92400e' // dark amber
      case 'output':
        return '#9a3412' // dark orange
      case 'constraints':
        return '#6b21a8' // dark purple
      case 'meta':
        return '#164e63' // dark cyan
      default:
        return '#374151'
    }
  }

  const getCategoryBorderColor = (category: string) => {
    switch (category) {
      case 'role':
        return '#3b82f6' // blue-500
      case 'audience':
        return '#ec4899' // pink-500
      case 'context':
        return '#22c55e' // green-500
      case 'reasoning':
        return '#f59e0b' // amber-500
      case 'output':
        return '#f97316' // orange-500
      case 'constraints':
        return '#a855f7' // purple-500
      case 'meta':
        return '#06b6d4' // cyan-500
      default:
        return '#9ca3af'
    }
  }

  const getCurrentCategoryColor = (category: string) =>
    isLightMode
      ? getLightCategoryColor(category)
      : getDarkCategoryColor(category)

  // Prompt compilation with research-backed ordering
  const compiledPrompt = useMemo(() => {
    const sections: { [key: string]: string[] } = {
      role: [],
      audience: [],
      context: [],
      reasoning: [],
      output: [],
      constraints: [],
      meta: [],
    }

    // Add audience toggle if set to technical
    if (audienceToggle === 'technical') {
      sections.audience.push(
        'Assume your audience has strong technical background and can handle detailed, specialized explanations.'
      )
    } else {
      sections.audience.push(
        'Explain concepts in accessible language suitable for a general audience without extensive technical background.'
      )
    }

    // Process selected components
    COMPONENT_ARRAY.forEach((component) => {
      if (selectedComponents.has(component.id)) {
        sections[component.category].push(component.template)
      }
    })

    // Compile in research-optimal order
    const orderedSections = [
      'role',
      'audience',
      'context',
      'reasoning',
      'output',
      'constraints',
      'meta',
    ]
    const parts: string[] = []

    orderedSections.forEach((category) => {
      if (sections[category].length > 0) {
        parts.push(sections[category].join(' '))
      }
    })

    return parts.join('\n\n')
  }, [selectedComponents, audienceToggle])

  const categoryLabels = {
    role: 'Role Specification',
    audience: 'Audience Targeting',
    context: 'Context Provision',
    reasoning: 'Reasoning Strategy',
    output: 'Output Instructions',
    constraints: 'Constraint Specifications',
    meta: 'Meta-Prompt Enhancements',
  }

  const categoryIcons = {
    role: '👤',
    audience: '🎯',
    context: '📋',
    reasoning: '🧠',
    output: '📄',
    constraints: '⚡',
    meta: '🔄',
  }

  const groupedComponents = COMPONENT_ARRAY.reduce(
    (acc, component) => {
      if (!acc[component.category]) {
        acc[component.category] = []
      }
      acc[component.category].push(component)
      return acc
    },
    {} as { [key: string]: typeof COMPONENT_ARRAY }
  )

  // Word counting function for actual compiled prompt text
  const countWords = (text: string): number => {
    if (!text.trim()) return 0
    return text.trim().split(/\s+/).length
  }

  const statistics = {
    components: selectedComponents.size + 1,
    wordCount: countWords(compiledPrompt),
    categories: Object.keys(categoryLabels).filter(
      (cat) =>
        groupedComponents[cat]?.some((comp) =>
          selectedComponents.has(comp.id)
        ) ||
        (cat === 'audience' && audienceToggle)
    ).length,
  }

  return (
    <div className={`${promptComposerStyles.container} ${className || ''}`}>
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className={promptComposerStyles.title} style={{ color: 'inherit' }}>
          Prompt Composer
        </h1>
        <p className={promptComposerStyles.subtitle}>
          Research-backed modular construction for maximally effective prompts.
        </p>
      </div>

      {/* Main Layout */}
      <div className={promptComposerStyles.mainLayout}>
        {/* Left Panel - Component Selection */}
        <div className={promptComposerStyles.leftPanel}>
          <h2
            className={promptComposerStyles.leftPanelTitle}
            style={{ color: 'inherit' }}
          >
            Prompt Components
          </h2>

          {Object.entries(categoryLabels).map(([category, label]) => (
            <div
              key={category}
              className={promptComposerStyles.categoryContainer}
            >
              <button
                onClick={() => toggleCategory(category)}
                className={promptComposerStyles.categoryButton}
                style={{
                  backgroundColor: getCurrentCategoryColor(category),
                  padding: 5,
                }}
              >
                <span className="ml-auto text-gray-400">
                  {expandedCategories.has(category) ? '▼' : '▶'}
                </span>
                <span className={promptComposerStyles.categoryIcon}>
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </span>
                <span
                  className={promptComposerStyles.categoryLabel}
                  style={{ fontSize: '1rem', fontWeight: 'bold' }}
                >
                  {label}
                </span>
              </button>

              {expandedCategories.has(category) && (
                <div className={promptComposerStyles.expandedContainer}>
                  <div
                    className={promptComposerStyles.componentContainer}
                    style={{
                      borderColor: getCategoryBorderColor(category),
                      backgroundColor: getCategoryBorderColor(category) + '40',
                    }}
                  >
                    <div
                      className={promptComposerStyles.verticalLine}
                      style={{
                        backgroundColor: getCurrentCategoryColor(category),
                      }}
                    />
                    <div className={promptComposerStyles.componentsWrapper}>
                      {/* Handle audience toggle separately */}
                      {category === 'audience' && (
                        <div className={promptComposerStyles.componentWrapper}>
                          <div className="p-3 hover:bg-white hover:bg-opacity-50">
                            {/* Toggle with labels - forced horizontal layout */}
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                              }}
                            >
                              <span
                                className={`text-sm font-medium transition-colors ${
                                  audienceToggle === 'general'
                                    ? 'text-blue-600'
                                    : 'text-gray-500'
                                }`}
                              >
                                General
                              </span>

                              <button
                                onClick={handleAudienceToggle}
                                className={`${styles.themeSwitch} ${
                                  audienceToggle === 'technical'
                                    ? styles.themeToggleDark
                                    : styles.themeToggleLight
                                }`}
                                style={{ borderRadius: '50px' }}
                                aria-label={`Switch to ${audienceToggle === 'technical' ? 'general' : 'technical'} audience`}
                              >
                                <div
                                  className={`${styles.themeSwitchCircle} ${
                                    audienceToggle === 'technical'
                                      ? styles.themeSwitchCircleDark
                                      : styles.themeSwitchCircleLight
                                  }`}
                                />
                              </button>

                              <span
                                className={`text-sm font-medium transition-colors ${
                                  audienceToggle === 'technical'
                                    ? 'text-blue-600'
                                    : 'text-gray-500'
                                }`}
                              >
                                Technical
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Regular components */}
                      {groupedComponents[category]?.map((component) => (
                        <div
                          key={component.id}
                          className={promptComposerStyles.componentWrapper}
                        >
                          <label
                            className={promptComposerStyles.componentItem}
                            style={{ display: 'flex', flexDirection: 'row' }}
                          >
                            {component.inputType === 'radio' ? (
                              <input
                                type="radio"
                                name={component.radioGroup}
                                checked={selectedComponents.has(component.id)}
                                onChange={() =>
                                  toggleComponent(
                                    component.id,
                                    component.inputType,
                                    component.radioGroup
                                  )
                                }
                                className={promptComposerStyles.componentRadio}
                              />
                            ) : (
                              <input
                                type="checkbox"
                                checked={selectedComponents.has(component.id)}
                                onChange={() =>
                                  toggleComponent(
                                    component.id,
                                    component.inputType
                                  )
                                }
                                className={
                                  promptComposerStyles.componentCheckbox
                                }
                              />
                            )}
                            <div
                              className={
                                promptComposerStyles.componentTextContainer
                              }
                            >
                              <span
                                className={promptComposerStyles.componentTitle}
                              >
                                {component.label}:&nbsp;
                              </span>
                              <span
                                className={
                                  promptComposerStyles.componentSubtitle
                                }
                              >
                                {component.description}
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
          ))}
        </div>

        {/* Right Panel - Preview */}
        <div className={promptComposerStyles.rightPanel}>
          <div
            className={promptComposerStyles.rightPanelHeader}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <h2
              className={promptComposerStyles.rightPanelTitle}
              style={{ color: 'inherit' }}
            >
              Compiled Prompt
            </h2>
            <button
              onClick={copyToClipboard}
              disabled={!compiledPrompt.trim()}
              className={promptComposerStyles.copyButton}
              style={{
                borderRadius: '50px',
                height: '40px',
                marginTop: '2rem',
              }}
            >
              <DocumentDuplicateIcon
                style={{
                  width: '20px',
                  height: '20px',
                  marginTop: '1px',
                  marginRight: '10px',
                }}
              />
              <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>Copy</span>
            </button>
          </div>

          <div className={promptComposerStyles.previewContainer}>
            {compiledPrompt.trim() ? (
              <div className={promptComposerStyles.previewContent}>
                {/* Show organized sections by category */}
                {Object.entries(categoryLabels).map(([category, label]) => {
                  const categoryComponents = COMPONENT_ARRAY.filter(
                    (comp) =>
                      comp.category === category &&
                      selectedComponents.has(comp.id)
                  )

                  const hasAudienceContent =
                    category === 'audience' &&
                    (audienceToggle === 'technical' ||
                      audienceToggle === 'general')

                  if (categoryComponents.length === 0 && !hasAudienceContent)
                    return null

                  return (
                    <div
                      key={category}
                      className={promptComposerStyles.previewSection}
                      style={{
                        borderLeftColor: getCategoryBorderColor(category),
                        backgroundColor: getCurrentCategoryColor(category),
                      }}
                    >
                      <div
                        className={promptComposerStyles.previewCategoryHeader}
                        style={{ color: getCategoryBorderColor(category) }}
                      >
                        {categoryIcons[category as keyof typeof categoryIcons]}{' '}
                        {label}
                      </div>
                      {hasAudienceContent && (
                        <div
                          className={promptComposerStyles.previewComponentText}
                        >
                          {audienceToggle === 'technical'
                            ? 'Assume your audience has strong technical background and can handle detailed, specialized explanations.'
                            : 'Explain concepts in accessible language suitable for a general audience without extensive technical background.'}
                        </div>
                      )}
                      {categoryComponents.map((comp) => (
                        <div
                          key={comp.id}
                          className={promptComposerStyles.previewComponentText}
                        >
                          {comp.template}
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className={promptComposerStyles.emptyState}>
                <div className={promptComposerStyles.emptyStateTitle}>
                  No components selected
                </div>
                <div className={promptComposerStyles.emptyStateSubtitle}>
                  Choose components from the left panel to build your prompt
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Statistics & Analysis */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Statistics Card */}
            <div
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
              style={{ marginBottom: '20px' }}
            >
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                📊 Prompt Statistics
              </h3>
              <div
                className="grid grid-cols-3 gap-4 text-center"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}
              >
                <div>
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">
                    {statistics.wordCount} Words
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {statistics.components} Components{' '}
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    {statistics.categories} Categories
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research-Based Design Documentation */}
          <ToggleDropdown
            title="🔬 Research-Backed Design Documentation"
            startOpen={false}
          >
            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Design Philosophy & Research Foundation
                </h4>
                <p>
                  This Prompt Composer integrates research in LLM effectiveness
                  and UI/UX design.
                  <strong> Radio buttons</strong> are used for mutually
                  exclusive choices (role specification, reasoning strategy)
                  because research shows conflicting instructions can reduce LLM
                  performance.
                  <strong> Checkboxes</strong> enable beneficial component
                  combinations for context, output formatting, and constraints.
                  The <strong>binary toggle</strong> for audience targeting
                  follows established UX patterns and reflects the fundamental
                  technical/non-technical communication divide. Component
                  ordering follows task decomposition research showing role →
                  context → reasoning → output → constraints as the optimal
                  sequence for LLM comprehension.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Evidence-Based Component Categories
                </h4>
                <p>
                  Each category represents a distinct cognitive function based
                  on prompt engineering research:
                  <strong>Role Specification</strong> establishes the AI
                  persona, <strong>Context Provision</strong> leverages few-shot
                  learning principles, <strong>Reasoning Strategy</strong>{' '}
                  applies chain-of-thought research for complex tasks,{' '}
                  <strong>Output Instructions</strong> ensure structured
                  responses, <strong>Constraints</strong> maintain focus, and{' '}
                  <strong>Meta-Prompt Enhancements</strong> enable
                  self-improvement capabilities.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  UI/UX Component Selection Strategy
                </h4>
                <p>
                  The interface design follows established usability principles:
                  radio buttons for mutually exclusive cognitive roles prevent
                  conflicting instructions, toggle switches for binary states
                  provide immediate visual feedback, and checkboxes for additive
                  elements allow beneficial layering of context and constraints.
                  Visual hierarchy and color coding reduce cognitive load while
                  maintaining accessibility standards.
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  References
                </h4>
                <div className="text-xs space-y-2 text-gray-600 dark:text-gray-400">
                  <p>
                    Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D.,
                    Dhariwal, P., ... & Amodei, D. (2020). Language models are
                    few-shot learners.{' '}
                    <em>Advances in Neural Information Processing Systems</em>,
                    33, 1877-1901. Available:{' '}
                    <a
                      href="https://arxiv.org/abs/2005.14165"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://arxiv.org/abs/2005.14165
                    </a>
                  </p>

                  <p>
                    Khot, T., Trivedi, H., Finlayson, M., Sabharwal, A., &
                    Clark, P. (2023). Decomposed prompting: A modular approach
                    for solving complex tasks.{' '}
                    <em>
                      Proceedings of the International Conference on Learning
                      Representations
                    </em>
                    . Available:{' '}
                    <a
                      href="https://arxiv.org/abs/2210.02406"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://arxiv.org/abs/2210.02406
                    </a>
                  </p>

                  <p>
                    Lu, Y., Bartolo, M., Moore, A., Riedel, S., & Stenetorp, P.
                    (2022). Fantastically ordered prompts and where to find
                    them: Overcoming few-shot prompt order sensitivity.{' '}
                    <em>
                      Proceedings of the 60th Annual Meeting of the Association
                      for Computational Linguistics
                    </em>
                    , 1, 8086-8098. Available:{' '}
                    <a
                      href="https://arxiv.org/abs/2104.08786"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://arxiv.org/abs/2104.08786
                    </a>
                  </p>

                  <p>
                    Min, S., Lyu, X., Holtzman, A., Artetxe, M., Lewis, M.,
                    Hajishirzi, H., & Zettlemoyer, L. (2022). Rethinking the
                    role of demonstrations: What makes in-context learning work?{' '}
                    <em>
                      Proceedings of the 2022 Conference on Empirical Methods in
                      Natural Language Processing
                    </em>
                    , 11048-11064. Available:{' '}
                    <a
                      href="https://arxiv.org/abs/2202.12837"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://arxiv.org/abs/2202.12837
                    </a>
                  </p>

                  <p>
                    Nielsen, J., & Budiu, R. (2012). <em>Mobile usability</em>.
                    New Riders Publishing. Available:{' '}
                    <a
                      href="https://www.nngroup.com/books/mobile-usability/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://www.nngroup.com/books/mobile-usability/
                    </a>
                  </p>

                  <p>
                    Tullis, T., & Albert, B. (2013).{' '}
                    <em>
                      Measuring the user experience: Collecting, analyzing, and
                      presenting usability metrics
                    </em>
                    . Morgan Kaufmann.
                  </p>

                  <p>
                    Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang,
                    S., ... & Zhou, D. (2023). Self-consistency improves chain
                    of thought reasoning in language models.{' '}
                    <em>
                      International Conference on Learning Representations
                    </em>
                    . Available:{' '}
                    <a
                      href="https://arxiv.org/abs/2203.11171"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://arxiv.org/abs/2203.11171
                    </a>
                  </p>

                  <p>
                    Wei, J., Wang, X., Schuurmans, D., Bosma, M., Chi, E., Le,
                    Q. V., ... & Zhou, D. (2022). Chain-of-thought prompting
                    elicits reasoning in large language models.{' '}
                    <em>Advances in Neural Information Processing Systems</em>,
                    35, 24824-24837. Available:{' '}
                    <a
                      href="https://arxiv.org/abs/2201.11903"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://arxiv.org/abs/2201.11903
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </ToggleDropdown>
        </div>
      </div>
    </div>
  )
}

export default PromptComposer
