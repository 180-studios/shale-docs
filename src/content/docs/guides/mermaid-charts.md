---
title: Using Mermaid Charts
description: Add diagrams and charts to your documentation using Mermaid syntax.
---

Your Shale Docs site includes the `astro-mermaid` integration, which allows you to embed interactive Mermaid diagrams directly in your Markdown files. This guide shows you how to use it.

## What is Mermaid?

Mermaid is a JavaScript-based diagramming and charting tool that lets you create diagrams using a simple, Markdown-like syntax. No need for image files or external tools—just write code and get beautiful diagrams automatically.

## Basic Syntax

To add a Mermaid diagram to any `.md` or `.mdx` file, use a code block with the `mermaid` language identifier:

````markdown
```mermaid
graph TD
  A[Start] --> B{Decision}
  B -->|Yes| C[Do Something]
  B -->|No| D[Do Something Else]
  C --> E[End]
  D --> E
```
````

The diagram will render automatically when you build or view your site.

## Diagram Types

### Flowcharts

Perfect for showing processes and workflows:

```mermaid
graph TD
  A[Install Shale Plugin] --> B[Create Account]
  B --> C[Start Review Session]
  C --> D[Invite Reviewers]
  D --> E[Collect Feedback]
```

### Sequence Diagrams

Show interactions between different actors:

```mermaid
sequenceDiagram
  participant Artist
  participant Shale
  participant Reviewer
  
  Artist->>Shale: Create review session
  Shale-->>Artist: Session link generated
  Artist->>Reviewer: Share session link
  Reviewer->>Shale: View 3D content
  Reviewer->>Shale: Add annotations
  Shale-->>Artist: Sync feedback to DCC
```

### Class Diagrams

Document object relationships and hierarchies:

```mermaid
classDiagram
  class ReviewSession {
    +id: string
    +createdAt: date
    +status: string
    +createAnnotation()
    +exportFeedback()
  }
  
  class Annotation {
    +id: string
    +type: string
    +location: vector3
    +comment: string
  }
  
  ReviewSession "1" --> "*" Annotation
```

### State Diagrams

Show state transitions:

```mermaid
stateDiagram-v2
  [*] --> NotStarted
  NotStarted --> Active: User creates session
  Active --> Paused: User pauses session
  Paused --> Active: User resumes
  Active --> Completed: Session ends
  Completed --> [*]
```

### Pie Charts

Display data distribution:

```mermaid
pie title Annotation Types
  "Brush Comments": 45
  "Text Notes": 30
  "Markers": 20
  "Voice Notes": 5
```

### Gantt Charts

Plan and track project timelines:

```mermaid
gantt
  title Shale Review Project
  dateFormat YYYY-MM-DD
  
  Setup Phase           :a1, 2026-03-01, 30d
  Review Round 1        :a2, after a1, 14d
  Feedback Analysis     :a3, after a2, 7d
  Revisions             :a4, after a3, 14d
  Final Review          :a5, after a4, 7d
```

## Best Practices

### Keep Diagrams Simple
- Focus on one concept per diagram
- Limit the number of elements
- Use clear, descriptive labels

### Use Consistent Naming
- Use the same terminology as your documentation
- Match your branding and style guide
- Be consistent with capitalization

### Provide Context
- Always introduce the diagram with explanatory text
- Explain what each element represents
- Include a caption or title when needed

### Example with Context

```markdown
## Shale Review Workflow

This flowchart shows the basic steps for a typical review session:

```mermaid
graph LR
  A[DCC Open] --> B[Start Shale]
  B --> C[Create Session]
  C --> D[Share Link]
  D --> E[Reviewers Join]
  E --> F[Annotate]
  F --> G[Feedback Syncs]
```
```
```

## Styling and Customization

Mermaid supports themes and styling. You can customize diagrams by adding configuration in your Astro config, or use inline themes within code blocks:

### Using Themes

```mermaid
%%{init: {'theme':'dark'}}%%
graph TD
  A[Feature] --> B[Implementation]
  B --> C[Testing]
  C --> D[Deployment]
```

### Customizing Node Styles

```mermaid
graph TD
  A[Start]:::startNode --> B{Decision}
  B -->|Path 1| C[Result]:::successNode
  B -->|Path 2| D[Alternative]:::warningNode
  
  classDef startNode fill:#90EE90
  classDef successNode fill:#87CEEB
  classDef warningNode fill:#FFB347
```

## Troubleshooting

### Diagram Not Rendering

1. **Check syntax**: Ensure your Mermaid syntax is valid
2. **Verify language identifier**: Use exactly ` ```mermaid ` (not ```` ```diagram ````)
3. **Rebuild site**: Run `npm run build` to force a full rebuild
4. **Check browser console**: Look for JavaScript errors in your browser's developer tools

### Performance Considerations

- Large, complex diagrams may affect page load times
- Consider breaking complex workflows into multiple smaller diagrams
- Use simple chart types for frequently updated content

## More Resources

- [Mermaid Official Documentation](https://mermaid.js.org/)
- [Mermaid Live Editor](https://mermaid.live/) - test diagrams before adding to your docs
- [astro-mermaid Integration Docs](https://github.com/jordancknight/astro-mermaid)
