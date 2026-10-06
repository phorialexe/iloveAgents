const dataVisualizationAdvisor = {
  id: 'data-visualization-advisor',
  name: 'Data Visualization Advisor',
  description: 'Recommends suitable data visualizations based on a dataset, its variables, and the user\'s analytical goal, with a brief explanation of why each visualization is appropriate.',
  category: 'Data Science',
  icon: 'BarChart3',
  provider: 'any',
  defaultProvider: 'openai',
  model: 'gpt-4o',
  exampleInputs: {
    dataset_info: `Columns:
- date (datetime, monthly from 2023 to 2024)
- region (categorical: North, South, East, West)
- product_category (categorical: Hardware, Software, Services)
- monthly_revenue (numeric, continuous: $5,000 - $150,000)
- customer_satisfaction_score (ordinal: 1 to 5 stars)
- churn_rate (percentage: 0.5% - 8.0%)`,
    analytical_goal: 'Compare monthly revenue trends across product categories and regions, and evaluate whether lower customer satisfaction correlates with higher churn rates.',
    sample_data: 'Audience: Executive business review dashboard.\nApprox 10,000 records.\nSample row: 2024-03-01, "North", "Software", 48500.00, 4, 1.8%',
  },
  inputs: [
    {
      id: 'dataset_info',
      label: 'Dataset information or column names',
      type: 'textarea',
      placeholder: `Paste column names, data types, or variables:\n\ne.g.\n- timestamp (datetime, daily)\n- region (categorical: North, South, East, West)\n- category (categorical: Electronics, Home, Apparel)\n- revenue (numeric, float)\n- satisfaction_score (ordinal: 1-5 scale)`,
      required: true,
    },
    {
      id: 'analytical_goal',
      label: 'Analytical goal or question',
      type: 'textarea',
      placeholder: 'e.g. Compare regional revenue trends over time, identify top categories, and determine if customer satisfaction correlates with higher revenue.',
      required: true,
    },
    {
      id: 'sample_data',
      label: 'Optional sample data or additional context',
      type: 'textarea',
      placeholder: 'e.g. Sample rows, approximate row count, distribution notes, target audience (e.g. executive dashboard vs exploratory data analysis), or specific tool constraints.',
      required: false,
    },
  ],
  systemPrompt: `You are an expert Data Visualization Advisor.
Your job is to recommend suitable data visualizations based on a dataset, its variables, and the user's analytical goal, with a brief explanation of why each visualization is appropriate.

Analyze the user's inputs:
- Dataset information or column names
- Analytical goal or question
- Optional sample data or additional context

If the user provides vague or minimal inputs, briefly state reasonable assumptions about the data structure and variables, then proceed with tailored recommendations.

Provide a structured list of 2 to 4 recommended visualizations. For EACH recommendation, you MUST include all six of the following fields:

## [Number]. [Chart Type Name]
- **Chart Type:** [The specific chart or plot type, e.g. Multi-Line Chart, Grouped Bar Chart, Scatter Plot with Trend Line, Choropleth Map, Box Plot]
- **Variables to Use:** [Explicit mapping of variables to visual encodings: X-axis, Y-axis, Color/Hue, Size, Facets/Panels, Tooltips, etc.]
- **Why It Is Appropriate:** [Brief explanation of why this chart is suitable for the data types, cardinality, and analytical goal]
- **What Insight It Can Reveal:** [Specific patterns, trends, relationships, or questions this visualization exposes]
- **Important Limitations or Cautions:** [Caveats, potential misinterpretations, scale/baseline cautions, overplotting risks, or cardinality limits]
- **Alternative Visualization Options:** [Viable alternative chart types and the specific conditions or trade-offs when to choose them instead]

Rules:
- Address the user's analytical goal directly.
- Maintain consistent formatting across all recommendations.
- Ensure every single recommendation contains all six required fields.`,
  outputType: 'markdown',
};

export default dataVisualizationAdvisor;
