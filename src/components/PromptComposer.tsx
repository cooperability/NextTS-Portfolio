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
 *      └── Context Setting
 *          ├── Role Definition (System Architect, Creative Writer, Data Analyst, etc.)
 *          ├── Domain Expertise (Technical, Creative, Business, Academic)
 *          └── Interaction Style (Formal, Conversational, Step-by-step)
 *      └── Input Formatting
 *          ├── Data Types (Code, Text, Images, Tables, JSON)
 *          ├── Context Clues ("The following is...", "Given this data...", "Based on...")
 *          └── Preprocessing Instructions (Clean, Format, Parse expectations)
 *      └── Output Specifications  
 *          ├── Format (Markdown, JSON, Plain text, Code blocks, Lists)
 *          ├── Length (Brief, Detailed, Comprehensive, Specific word count)
 *          ├── Structure (Numbered steps, Bullet points, Paragraphs, Sections)
 *          └── Target Program (Cursor, VSCode, Terminal, Web browser)
 *      └── Behavioral Modifiers
 *          ├── Tone (Professional, Friendly, Direct, Encouraging)
 *          ├── Approach (Methodical, Creative, Analytical, Practical)
 *          └── Error Handling (Ask for clarification, Make assumptions, List unknowns)
 *      └── Quality Controls
 *          ├── Verification Steps (Double-check, Test, Validate)
 *          ├── Edge Cases (Handle errors, Missing data, Invalid input)
 *          └── Success Criteria (Clear metrics, Expected outcomes)
 * 
 * 2. LIVE PREVIEW INTERFACE (Right Panel ~60% width):
 *    - Real-time compilation of selected prompt components
 *    - Color-coded sections showing different prompt elements:
 *      * System context (blue background)
 *      * Input instructions (green background)  
 *      * Output requirements (orange background)
 *      * Behavioral modifiers (purple background)
 *      * Quality controls (yellow background)
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
 *   category: 'context' | 'input' | 'output' | 'behavior' | 'quality'
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
 * - Basic checkbox interface with 3-4 main categories
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
 */

import React, { useState, useMemo } from 'react'
import styles from '../styles/utils.module.css'

// Sample prompt components for the MVP
interface PromptComponent {
  id: string
  category: 'context' | 'input' | 'output' | 'behavior' | 'quality'
  label: string
  description: string
  template: string
  priority: number
}

const SAMPLE_COMPONENTS: PromptComponent[] = [
  // Context components
  {
    id: 'role-expert',
    category: 'context',
    label: 'Expert Role',
    description: 'Sets you as a subject matter expert',
    template: 'You are an expert in your field with deep knowledge and practical experience.',
    priority: 1
  },
  {
    id: 'role-teacher',
    category: 'context',
    label: 'Teaching Role',
    description: 'Sets you as a helpful educator',
    template: 'You are a knowledgeable teacher who explains concepts clearly and patiently.',
    priority: 1
  },
  // Input components
  {
    id: 'input-code',
    category: 'input',
    label: 'Code Input',
    description: 'Prepares for code analysis',
    template: 'I will provide code that needs to be analyzed. Please review it carefully and consider its structure, logic, and potential improvements.',
    priority: 2
  },
  {
    id: 'input-text',
    category: 'input',
    label: 'Text Input', 
    description: 'Prepares for text analysis',
    template: 'I will provide text content that needs to be processed. Please read it thoroughly and understand the context.',
    priority: 2
  },
  // Output components
  {
    id: 'output-markdown',
    category: 'output',
    label: 'Markdown Output',
    description: 'Formats response as markdown',
    template: 'Please format your response using proper markdown syntax with headers, lists, and code blocks where appropriate.',
    priority: 3
  },
  {
    id: 'output-steps',
    category: 'output',
    label: 'Step-by-Step',
    description: 'Organizes response as numbered steps',
    template: 'Structure your response as clear, numbered steps that can be followed sequentially.',
    priority: 3
  },
  // Behavior components
  {
    id: 'behavior-thorough',
    category: 'behavior',
    label: 'Thorough Analysis',
    description: 'Ensures comprehensive coverage',
    template: 'Be thorough in your analysis and don\'t skip important details or edge cases.',
    priority: 4
  },
  {
    id: 'behavior-concise',
    category: 'behavior',
    label: 'Concise Style',
    description: 'Keeps responses focused and brief',
    template: 'Keep your response concise and focused on the essential points.',
    priority: 4
  }
]

interface PromptComposerProps {
  className?: string
}

const PromptComposer: React.FC<PromptComposerProps> = ({ className }) => {
  const [selectedComponents, setSelectedComponents] = useState<Set<string>>(new Set())
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['context', 'input', 'output', 'behavior']))

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

  const composedPrompt = useMemo(() => {
    const selectedComps = SAMPLE_COMPONENTS
      .filter(comp => selectedComponents.has(comp.id))
      .sort((a, b) => a.priority - b.priority)
    
    return selectedComps.map(comp => comp.template).join('\n\n')
  }, [selectedComponents])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(composedPrompt)
      alert('Prompt copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'context': return '#e3f2fd' // light blue
      case 'input': return '#e8f5e8' // light green
      case 'output': return '#fff3e0' // light orange
      case 'behavior': return '#f3e5f5' // light purple
      case 'quality': return '#fffde7' // light yellow
      default: return '#f5f5f5'
    }
  }

  const categoryLabels = {
    context: '🎭 Context Setting',
    input: '📥 Input Formatting', 
    output: '📤 Output Specifications',
    behavior: '🎯 Behavioral Modifiers',
    quality: '✅ Quality Controls'
  }

  const componentsByCategory = SAMPLE_COMPONENTS.reduce((acc, comp) => {
    if (!acc[comp.category]) acc[comp.category] = []
    acc[comp.category].push(comp)
    return acc
  }, {} as Record<string, PromptComponent[]>)

  return (
    <div className={`${className} min-h-screen bg-gray-50`}>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">🧩 Prompt Composer</h1>
        <p className="text-gray-600 mb-6">Build modular prompts by selecting components. See how they combine in real-time.</p>
        
        <div className="flex flex-col lg:flex-row gap-6 h-full">
          {/* Left Panel - Component Selection */}
          <div className="lg:w-2/5 bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Components</h2>
            
            {Object.entries(componentsByCategory).map(([category, components]) => (
              <div key={category} className="mb-4">
                <button
                  onClick={() => toggleCategory(category)}
                  className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <span className="font-medium text-gray-700">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </span>
                  <span className="text-gray-500">
                    {expandedCategories.has(category) ? '▼' : '▶'}
                  </span>
                </button>
                
                {expandedCategories.has(category) && (
                  <div className="mt-2 space-y-2 pl-4">
                    {components.map(comp => (
                      <label key={comp.id} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedComponents.has(comp.id)}
                          onChange={() => toggleComponent(comp.id)}
                          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-sm text-gray-800">{comp.label}</div>
                          <div className="text-xs text-gray-600">{comp.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Panel - Live Preview */}
          <div className="lg:w-3/5 bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Live Preview</h2>
              <button
                onClick={copyToClipboard}
                disabled={!composedPrompt}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                📋 Copy Prompt
              </button>
            </div>
            
            <div className="border rounded-lg min-h-96 p-4 bg-gray-50">
              {composedPrompt ? (
                <div className="space-y-4">
                  {SAMPLE_COMPONENTS
                    .filter(comp => selectedComponents.has(comp.id))
                    .sort((a, b) => a.priority - b.priority)
                    .map(comp => (
                      <div
                        key={comp.id}
                        className="p-3 rounded border-l-4"
                        style={{ 
                          backgroundColor: getCategoryColor(comp.category),
                          borderLeftColor: getCategoryColor(comp.category).replace('f', 'a')
                        }}
                      >
                        <div className="text-xs font-medium text-gray-600 mb-1 uppercase tracking-wide">
                          {comp.category} • {comp.label}
                        </div>
                        <div className="text-gray-800">{comp.template}</div>
                      </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 mt-12">
                  <div className="text-4xl mb-4">🎯</div>
                  <div className="text-lg">Select components to build your prompt</div>
                  <div className="text-sm mt-2">Choose from the categories on the left to see your prompt take shape</div>
                </div>
              )}
            </div>
            
            {composedPrompt && (
              <div className="mt-4 text-sm text-gray-600">
                <strong>Components selected:</strong> {selectedComponents.size} • 
                <strong> Characters:</strong> {composedPrompt.length}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromptComposer 