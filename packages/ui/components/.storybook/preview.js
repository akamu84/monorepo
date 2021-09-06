
import '../src/styles/main.scss';

export const parameters = {
  layout: 'centered',
  viewport: {
    viewports: {
      "mobile": {
        "name": "Mobile",
        "styles": {
          "width": "768px",
          "height": "963px"
        },
        "type": "tablet"
      },
      "tablet": {
        "name": "Tablet",
        "styles": {
          "width": "1023px",
          "height": "963px"
        },
        "type": "tablet"
      },
      "desktop": {
        "name": "Desktop",
        "styles": {
          "width": "1215px",
          "height": "100%"
        },
        "type": "desktop"
      },
      "widescreen": {
        "name": "Widescreen",
        "styles": {
          "width": "1407px",
          "height": "100%"
        },
        "type": "desktop"
      },
      "fullhd": {
        "name": "FullHD",
        "styles": {
          "width": "1920px",
          "height": "100%"
        },
        "type": "desktop"
      },
    }
  }
};