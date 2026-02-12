# Tailwind CSS Reference - Laundry Modern

Quick reference untuk Tailwind CSS classes yang sering digunakan di project ini.

## Colors (Design Tokens)

### Primary Color (Biru)
```tsx
className="bg-primary text-primary foreground"           // Background & text
className="border-primary hover:bg-primary"              // Border & hover
className="text-primary/50"                              // With opacity
```

### Secondary Color (Hijau)
```tsx
className="bg-secondary text-secondary-foreground"
className="hover:bg-secondary/30"
```

### Accent Color (Biru Terang)
```tsx
className="bg-accent text-accent-foreground"
className="text-accent"
```

### Neutral Colors
```tsx
className="bg-background text-foreground"        // Default background & text
className="bg-muted text-muted-foreground"      // Muted/secondary text
className="border-border"                        // Border color
className="bg-card text-card-foreground"        // Card backgrounds
```

## Sizing

### Width
```tsx
className="w-full"           // 100%
className="w-1/2"            // 50%
className="w-1/3"            // 33.33%
className="w-auto"           // auto
className="w-screen"         // 100vw
className="w-24"             // 96px (6rem)
className="max-w-7xl"        // 80rem (max width container)
className="max-w-md"         // 28rem (for content)
```

### Height
```tsx
className="h-full"           // 100%
className="h-screen"         // 100vh
className="h-24"             // 96px
className="min-h-screen"     // min-height 100vh
```

### Padding
```tsx
className="p-4"              // All sides 16px
className="px-6"             // Left & right 24px
className="py-8"             // Top & bottom 32px
className="pt-4 pb-8"        // Top & bottom different
```

### Margin
```tsx
className="m-4"              // All sides 16px
className="mx-auto"          // Center horizontally
className="mb-6"             // Margin bottom
className="mt-4"             // Margin top
className="my-8"             // Top & bottom
```

### Gap (Flexbox/Grid)
```tsx
className="gap-4"            // Gap all directions
className="gap-x-6"          // Gap horizontal
className="gap-y-8"          // Gap vertical
```

## Typography

### Font Sizes
```tsx
className="text-sm"          // 14px
className="text-base"        // 16px (default)
className="text-lg"          // 18px
className="text-xl"          // 20px
className="text-2xl"         // 24px
className="text-3xl"         // 30px
className="text-4xl"         // 36px
className="text-5xl"         // 48px
className="text-6xl"         // 60px
```

### Font Weight
```tsx
className="font-normal"      // 400
className="font-medium"      // 500
className="font-semibold"    // 600
className="font-bold"        // 700
className="font-extrabold"   // 800
```

### Font Family
```tsx
className="font-sans"        // Inter (default)
className="font-poppins"     // Poppins (headings)
className="font-mono"        // Monospace (code)
```

### Text Alignment
```tsx
className="text-left"        // Left
className="text-center"      // Center
className="text-right"       // Right
className="text-justify"     // Justify
className="text-balance"     // Balanced (new)
className="text-pretty"      // Pretty (new)
```

### Line Height
```tsx
className="leading-none"     // 1
className="leading-tight"    // 1.25
className="leading-snug"     // 1.375
className="leading-normal"   // 1.5
className="leading-relaxed"  // 1.625
className="leading-loose"    // 2
className="leading-6"        // 1.5rem
className="leading-7"        // 1.75rem
```

## Flexbox

### Direction
```tsx
className="flex"             // Display flex
className="flex-row"         // Left to right
className="flex-col"         // Top to bottom
className="flex-reverse"     // Reverse order
```

### Alignment
```tsx
className="items-start"      // Align top
className="items-center"     // Align middle (vertical)
className="items-end"        // Align bottom
className="items-stretch"    // Stretch to fill
className="items-baseline"   // Baseline align
```

### Justification
```tsx
className="justify-start"    // Start
className="justify-center"   // Center (horizontal)
className="justify-between"  // Space between
className="justify-around"   // Space around
className="justify-evenly"   // Space evenly
className="justify-end"      // End
```

### Wrapping
```tsx
className="flex-wrap"        // Wrap items
className="flex-nowrap"      // Don't wrap
className="flex-wrap-reverse" // Wrap reverse
```

### Flex Growth
```tsx
className="flex-1"           // Grow equally
className="flex-auto"        // Auto grow
className="flex-none"        // Don't grow
className="grow"             // Grow to fill
```

## Grid

### Columns
```tsx
className="grid"             // Display grid
className="grid-cols-1"      // 1 column
className="grid-cols-2"      // 2 columns
className="grid-cols-3"      // 3 columns
className="grid-cols-4"      // 4 columns
className="grid-cols-12"     // 12 columns (Bootstrap-like)
className="auto-cols-fr"     // Fractional units
```

### Gap
```tsx
className="gap-4"            // Gap 16px
className="gap-6"            // Gap 24px
className="gap-x-4 gap-y-6"  // Different x & y
```

## Borders

### Border
```tsx
className="border"           // 1px border
className="border-2"         // 2px border
className="border-4"         // 4px border
className="border-l"         // Left border only
className="border-t border-b" // Top & bottom
className="border-primary"   // Custom color
className="border-opacity-50" // Transparency
```

### Border Radius
```tsx
className="rounded"          // 0.25rem
className="rounded-lg"       // 0.5rem (default)
className="rounded-2xl"      // 1rem
className="rounded-3xl"      // 1.5rem
className="rounded-full"     // 50% (circle)
className="rounded-t-lg"     // Top only
className="rounded-b-2xl"    // Bottom only
```

## Background & Effects

### Background Color
```tsx
className="bg-white"         // Explicit white
className="bg-primary"       // Primary color
className="bg-primary/30"    // With opacity (30%)
className="bg-gradient-to-r from-primary to-secondary" // Gradient
```

### Shadows
```tsx
className="shadow-sm"        // Small shadow
className="shadow"           // Default shadow
className="shadow-md"        // Medium shadow
className="shadow-lg"        // Large shadow
className="shadow-xl"        // Extra large
className="shadow-2xl"       // 2X large
className="drop-shadow"      // Drop shadow
```

### Opacity
```tsx
className="opacity-0"        // Invisible
className="opacity-50"       // 50% opacity
className="opacity-100"      // Fully opaque
className="hover:opacity-75" // Hover opacity
```

### Blur & Effects
```tsx
className="blur"             // Default blur
className="blur-sm"          // Small blur
className="blur-lg"          // Large blur
className="filter"           // Enable filters
className="backdrop-blur-md"  // Backdrop blur
```

## Responsive Design

### Breakpoints
```tsx
// Mobile-first: default is mobile
className="hidden md:block"      // Hidden on mobile, shown on md+
className="text-sm md:text-lg lg:text-2xl"  // Different sizes
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Different columns
```

### Available Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## Display

```tsx
className="block"            // Display block
className="inline"           // Display inline
className="inline-block"     // Display inline-block
className="flex"             // Display flex
className="grid"             // Display grid
className="hidden"           // Display none
className="invisible"        // Hidden but takes space
className="sr-only"          // Screen reader only
```

## Transitions & Animations

### Transitions
```tsx
className="transition"                    // Default transition
className="transition-all"                // Transition all properties
className="transition-colors"             // Only colors
className="transition-transform"          // Only transform
className="duration-200"                  // 200ms
className="duration-300"                  // 300ms
className="ease-out"                      // Easing function
className="hover:scale-105 transition"    // Scale on hover
```

### Transforms
```tsx
className="scale-95"         // Scale 95%
className="scale-100"        // Scale 100% (default)
className="scale-110"        // Scale 110%
className="hover:scale-105"  // Hover scale
className="translate-x-4"    // Move right
className="translate-y-2"    // Move down
className="rotate-45"        // Rotate 45deg
```

## Positioning

### Position
```tsx
className="absolute"         // Position absolute
className="relative"         // Position relative
className="fixed"            // Position fixed
className="sticky"           // Position sticky
className="static"           // Position static
```

### Inset (top, right, bottom, left)
```tsx
className="top-0"            // top: 0
className="left-0"           // left: 0
className="inset-0"          // All sides: 0 (full cover)
className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" // Center
```

### Z-Index
```tsx
className="z-0"              // z-index: 0
className="z-10"             // z-index: 10
className="z-50"             // z-index: 50
className="z-auto"           // z-index: auto
```

## Interactions

### Hover
```tsx
className="hover:bg-primary"
className="hover:text-white"
className="hover:shadow-lg"
className="hover:scale-110"
className="hover:opacity-75"
```

### Focus
```tsx
className="focus:ring-2"
className="focus:ring-primary"
className="focus:outline-none"
```

### Active
```tsx
className="active:scale-95"
className="active:shadow-sm"
```

### Group (for parent-child interactions)
```tsx
className="group"
className="group-hover:text-primary"
```

## Cursor & Pointer

```tsx
className="cursor-pointer"   // Pointer cursor
className="cursor-default"   // Default cursor
className="cursor-not-allowed" // Not allowed
className="select-none"      // Can't select text
className="pointer-events-none" // No mouse events
```

## Common Patterns

### Centered Container
```tsx
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```

### Centered Flex Box
```tsx
className="flex items-center justify-center h-screen"
```

### Card
```tsx
className="bg-white rounded-lg p-6 shadow-lg border border-border"
```

### Button
```tsx
className="px-6 py-2 bg-primary text-white rounded-lg hover:shadow-lg transition-all duration-300"
```

### Grid (3 columns responsive)
```tsx
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
```

### Hero Section
```tsx
className="min-h-screen pt-24 pb-12 md:pt-32 md:pb-20"
```

### Section Container
```tsx
className="py-16 md:py-24 max-w-7xl mx-auto px-4"
```

## Useful Combinations

### Responsive Text
```tsx
className="text-2xl md:text-3xl lg:text-4xl font-bold"
```

### Responsive Spacing
```tsx
className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8"
```

### Hover Effect Stack
```tsx
className="hover:bg-primary hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
```

### Responsive Grid
```tsx
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
```

## Pro Tips

1. **Mobile-first**: Start with mobile classes, add `md:`, `lg:` for larger screens
2. **Use variables**: Prefer design tokens like `primary`, `secondary`
3. **Transitions**: Always add `transition` for smooth interactions
4. **Opacity**: Use `/50` instead of separate opacity classes
5. **Consistent spacing**: Stick to scale (4px, 8px, 16px, 24px, etc.)

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Tailwind UI](https://tailwindui.com)
- [Tailwind IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (VS Code Extension)

---

**Pro tip**: Install Tailwind CSS IntelliSense VS Code extension for autocomplete!
