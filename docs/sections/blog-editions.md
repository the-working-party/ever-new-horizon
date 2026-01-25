# Blog Editions Section

A carousel-based blog section featuring large horizontal cards with a distinctive 50/50 split layout.

## Overview

The Blog Editions section displays blog articles in an editorial-style carousel. Each card features:
- **Desktop**: Horizontal layout with image on the left (50%) and content on the right (50%)
- **Mobile**: Stacked layout with image on top and content below

This section is ideal for showcasing featured blog content, editorial pieces, or brand stories.

## Settings

### Blog Source
| Setting | Description | Default |
|---------|-------------|---------|
| Blog | Select the blog to display articles from | None |
| Post count | Number of articles to show (2-10) | 4 |

### Cards Layout
| Setting | Description | Default |
|---------|-------------|---------|
| Cards visible | Number of cards visible at once on desktop (1-3) | 1 |
| Horizontal gap | Space between cards in pixels | 8px |
| Mobile card size | Card width on mobile (Large or Medium) | Large (85%) |

### Carousel Navigation
| Setting | Description | Default |
|---------|-------------|---------|
| Icon | Arrow style (Arrows, Chevrons, Large variants, None) | None |
| Icon background | Background shape (None, Circle, Square) | None |

### Section Layout
| Setting | Description | Default |
|---------|-------------|---------|
| Width | Page width or Full width | Page width |
| Gap | Space between header and carousel | 16px |
| Color scheme | Section color scheme | Scheme 1 |
| Padding top/bottom | Vertical padding | 48px each |

## Block Settings

### Header Block
| Setting | Description | Default |
|---------|-------------|---------|
| Prefix | Text shown above the title (e.g., "BLOG") | BLOG |
| Custom title | Override the auto-generated blog title | None |
| Show "View all" | Display link to full blog | true |
| View all text | Text for the link | View all |

### Card Block
| Setting | Description | Default |
|---------|-------------|---------|
| Vertical gap | Space between content elements | 12px |
| Show CTA | Display "Read article" link | true |
| CTA text | Text for the read more link | Read article |
| Inherit color scheme | Use section's color scheme | true |
| Color scheme | Card-specific color scheme | Scheme 1 |
| Borders | Border style (None, Solid) | None |
| Padding | Inner spacing on all sides | 0px |

### Image Block
| Setting | Description | Default |
|---------|-------------|---------|
| Aspect ratio | Image proportions (Auto, Portrait, Square, Landscape) | Square |
| Border style | Image border (None, Solid) | None |
| Border radius | Corner rounding | 0px |

## Image Guidelines

### Recommended Specifications
- **Aspect ratio**: 1:1 (square) works best with the 50/50 layout
- **Minimum size**: 800 x 800 pixels
- **Maximum size**: 1920 x 1920 pixels for optimal quality
- **Format**: JPEG or WebP for photographs

### Best Practices
- Use consistent image dimensions across all articles
- Ensure important content is centered (images are cropped to fit)
- High contrast images work well with text overlay

## Content Tips

### Title
- Keep titles concise (3-7 words ideal)
- Use engaging, action-oriented language
- Consider how titles appear on mobile

### Excerpt
- Write compelling first paragraphs that work as excerpts
- Aim for 2-3 sentences
- Include key information that entices readers

### Tags/Author Info
- Configure which metadata displays in the nested info block
- Author and date can be shown/hidden independently

## Mobile Behavior

### Layout Changes
- Cards stack vertically (image on top, content below)
- Carousel maintains swipe navigation
- Content padding adjusts for smaller screens

### Touch Interaction
- Swipe left/right to navigate between articles
- Tap card to open article
- Smooth scrolling with momentum

## Accessibility

- Cards are fully keyboard navigable
- Screen readers announce article titles via visually hidden text
- Focus states are clearly visible
- Color contrast meets WCAG guidelines when using default schemes

## Example Use Cases

1. **Editorial Homepage**: Feature long-form articles with dramatic imagery
2. **Brand Stories**: Showcase behind-the-scenes content
3. **Lookbook Blog**: Display fashion or lifestyle content
4. **News Section**: Highlight recent updates or announcements

## Troubleshooting

### Cards not showing
- Ensure a blog is selected in section settings
- Verify the blog has published articles
- Check that post count is greater than 0

### Images not displaying
- Articles need featured images set
- Placeholder images appear in theme editor when no image exists

### Layout issues
- Clear browser cache if styles appear broken
- Check for conflicting custom CSS
