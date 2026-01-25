# Shop The Look Section

Create curated outfit showcases with a lifestyle image alongside a carousel of shoppable product images. Perfect for highlighting complete looks, outfit inspiration, or styled collections.

## Overview

The Shop The Look section features:
- A large lifestyle image on one side
- A horizontal carousel of product images on the other side
- Pagination dots below the product carousel
- Customizable heading, description, and call-to-action link below products
- Flexible layout options (image left or right)

## Adding the Section

1. In the Theme Customizer, click **Add section**
2. Search for **Shop the look**
3. The section will appear with placeholder content

## Settings

### Text Content

| Setting | Description | Default |
|---------|-------------|---------|
| **Subheading** | Small uppercase text above the heading | Empty |
| **Heading** | Main title for the section | "Shop The Look" |
| **Description** | Paragraph text below heading (supports rich text) | Empty |
| **Button label** | CTA link text (displays as underlined link) | Empty |
| **Button link** | URL for the CTA link | Empty |

### Layout

| Setting | Description | Options | Default |
|---------|-------------|---------|---------|
| **Layout** | Position of content relative to image | Image left/products right, Products left/image right | Image left |
| **Width** | Section width | Page width, Full width | Page width |

### Carousel

| Setting | Description | Default |
|---------|-------------|---------|
| **Show arrows** | Display navigation arrows on carousel | Off |

### Section

| Setting | Description | Options | Default |
|---------|-------------|---------|---------|
| **Color scheme** | Background and text colors | Theme color schemes | Scheme 1 |
| **Top padding** | Space above section | 0-100px | 40px |
| **Bottom padding** | Space below section | 0-100px | 40px |

## Adding Content Blocks

### Product Blocks

1. Click **Add block** in the section sidebar
2. Select **Product**
3. Click on the product block to open its settings
4. Select a product from your catalog
5. Optionally upload a **Custom image** to override the product's featured image

**Tip:** Use custom images for cut-out product photos that work better with the carousel layout.

### Image Block (Lifestyle)

1. Click **Add block** in the section sidebar
2. Select **Lifestyle image**
3. Click on the image block to open its settings
4. Upload or select a lifestyle image

**Note:** Only one lifestyle image is used. The first image block defines the main lifestyle image.

## Image Guidelines

| Image Type | Recommended Size | Aspect Ratio |
|------------|------------------|--------------|
| Lifestyle image | 1200 x 1600px | 3:4 (portrait) |
| Product images | 600 x 900px | Variable (cut-out style preferred) |

**Tips:**
- Use portrait-oriented lifestyle images for best results
- Product images work best as cut-outs (transparent/white background)
- Keep file sizes under 1MB for optimal loading
- Use WebP format when possible for faster loading

## Mobile Behavior

On mobile devices (under 750px):
- Layout stacks vertically with lifestyle image first
- Product carousel maintains swipe functionality
- Text content is centered below products
- Pagination dots remain visible

## Layout Examples

### Image Left, Products Right (Default)
```
+-------------------+--------------------+
|                   |  [Product Carousel]|
|   [Lifestyle      |    [img] [img]     |
|     Image]        |       . . . .      |
|                   |                    |
|                   |  Holiday Dress Code|
|                   |  Description text  |
|                   |  EXPLORE LINK      |
+-------------------+--------------------+
```

### Products Left, Image Right
```
+--------------------+-------------------+
|  [Product Carousel]|                   |
|    [img] [img]     |   [Lifestyle      |
|       . . . .      |     Image]        |
|                    |                   |
|  Holiday Dress Code|                   |
|  Description text  |                   |
|  EXPLORE LINK      |                   |
+--------------------+-------------------+
```

## Content Tips

1. **Curate complete looks**: Select products that work together as an outfit or collection
2. **Use compelling imagery**: Feature a lifestyle photo showing the products styled together
3. **Keep descriptions brief**: One or two sentences describing the look or occasion
4. **Clear CTAs**: Use action-oriented link text like "EXPLORE THE COLLECTION" or "SHOP THIS LOOK"
5. **Cut-out product images**: Use images with transparent/white backgrounds for a clean carousel look

## Best Practices

- **3-5 products** work best for the carousel
- **Match the lifestyle image** to the products displayed
- **Test mobile view** to ensure all elements are accessible
- **Use custom images** when product featured images don't work well in the carousel

## Troubleshooting

### Products not appearing
- Verify products are published in your Shopify admin
- Check that product blocks have products selected
- Ensure products have featured images (or upload custom images)

### Carousel not working
- Ensure JavaScript is enabled in the browser
- Add at least one product block
- Check browser console for errors
- Try refreshing the page

### Layout looks incorrect
- Clear browser cache
- Verify the layout setting is set correctly
- Check if custom CSS is interfering

### Product images look wrong
- Use cut-out style images (transparent/white background)
- Upload custom images if product images don't fit the design
- Ensure images are high quality and properly sized

## Related Sections

- **Featured Collection** - For highlighting a single collection with full product cards
- **Product Hotspots** - For interactive product tagging on images
- **Image with Text** - For simpler image + content layouts
