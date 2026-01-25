# Collection Style Section

Display collection images with styled tiles linking to your store's collections. Features a two-column layout with heading and navigation on the left, collection cards on the right.

## Overview

The Collection Style section showcases collections in an elegant horizontal layout with:
- A customizable heading on the left (desktop) or top (mobile)
- Carousel navigation arrows below the heading
- Collection images with uppercase titles below each image
- Two layout options: Grid (static) or Carousel (scrollable)

## Adding the Section

1. In the Theme Customizer, click **Add section**
2. Search for **Collection style**
3. The section will be added with default placeholder collections

## Settings

### Collections

| Setting | Description | Default |
|---------|-------------|---------|
| **Collections** | Select which collections to display | None (shows placeholders) |

### Cards Layout

| Setting | Description | Options | Default |
|---------|-------------|---------|---------|
| **Layout type** | How tiles are arranged | Grid, Carousel | Carousel |
| **Columns** | Number of visible tiles (desktop) | 2-6 | 4 |
| **Gap** | Space between tiles | 0-32px | 8px |

### Carousel Navigation

These settings only appear when Layout type is "Carousel":

| Setting | Description | Options | Default |
|---------|-------------|---------|---------|
| **Show arrows** | Display navigation arrows | On/Off | On |
| **Icon** | Style of arrow icons | Chevrons, Arrows | Chevrons |

### Section Layout

| Setting | Description | Options | Default |
|---------|-------------|---------|---------|
| **Heading width** | Width of left column (desktop only) | 200-600px | 448px |
| **Width** | Section width | Page width, Full width | Page width |
| **Color scheme** | Background and text colors | Theme color schemes | Scheme 1 |
| **Top padding** | Space above section | 0-100px | 48px |
| **Bottom padding** | Space below section | 0-100px | 48px |

## Customizing the Heading

The heading is a text block that you can fully customize:

1. Click on the section in the left sidebar
2. Click on the **Text** block
3. Edit the text content (supports line breaks with `<br>`)
4. Adjust typography settings (preset, font, size)
5. Set alignment (left, center, right)

**Default heading:** "Discover timeless style designed for modern women."

**Recommended heading presets:** h3 or h4 depending on page hierarchy.

## Image Guidelines

Collection images display in a portrait (100:133) aspect ratio.

| Recommended Size | When to Use |
|------------------|-------------|
| 448 × 597px | Standard desktop display |
| 224 × 299px | Smaller cards or mobile |

**Tips:**
- Use consistent image sizes across all collections
- Ensure the subject is centered for good cropping on mobile
- Keep file sizes under 500KB for faster loading
- Portrait-oriented images work best (model shots, product layouts)

## Mobile Behavior

On mobile devices (under 750px):
- Layout changes to vertical (heading above tiles)
- Carousel arrows appear below heading
- Tiles scroll horizontally in carousel
- Tile width reduces to 124px
- Gap between tiles reduces to 4px

## Carousel vs Grid

### Carousel Layout (Recommended)
- Navigation arrows appear below heading
- Tiles scroll smoothly left/right
- Best for 4+ collections
- Provides interactive experience
- Arrows auto-hide when all tiles are visible

### Grid Layout
- All tiles visible at once
- No navigation arrows
- Best for 3-4 collections
- Clean, static appearance

## Content Tips

1. **Choose meaningful collections**: Select collections that represent your brand's key categories (e.g., Wedding Guest, Bridesmaid, Occasion Wear)
2. **Keep titles short**: Titles display in UPPERCASE with letter spacing (e.g., "ACCESSORIES", "BLACK DRESSES")
3. **Use high-quality images**: Collection images are the visual focus - use professional photography
4. **Match the heading**: The heading text should complement the collection theme
5. **Test on mobile**: Ensure images and titles look good at 124px width

## Troubleshooting

### Images not showing
- Ensure each collection has a featured image set in **Products > Collections > [Collection] > Collection image**
- If no collection image exists, the first product image will be used
- Check that the image file format is supported (JPG, PNG, WebP)

### Tiles not appearing
- Verify collections are published and not empty
- Check that the collection list setting has collections selected
- Ensure the collection handles are correct

### Carousel arrows not visible
- Check that "Show arrows" is enabled in section settings
- Ensure Layout type is set to "Carousel" (arrows don't appear in Grid mode)
- Verify the arrow icon style is selected (Chevrons or Arrows)

### Arrows not working
- Ensure JavaScript is enabled in the browser
- Check the browser console for errors
- Try refreshing the page or clearing cache

### Layout looks different than expected
- Clear your browser cache
- Check if custom CSS is overriding styles
- Verify the heading width setting (affects left column width on desktop)
- Ensure the color scheme isn't affecting visibility

### Cards too small/large
- Adjust the **Columns** setting (fewer columns = larger cards)
- On desktop, cards auto-size based on columns and heading width
- On mobile, cards are fixed at 124px width

## Accessibility

The section includes:
- Descriptive ARIA labels for navigation arrows
- Keyboard navigation support for carousel
- Proper heading hierarchy through text block settings
- Link text for screen readers on collection cards
