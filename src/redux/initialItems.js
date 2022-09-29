import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideocamIcon from "@mui/icons-material/Videocam";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";

export const initialItems = [
  {
    id: 1,
    name: "Label",
    icon: <InsertPhotoIcon />,
    variants: [
      {
        name: "A",
        imageNames: ["1080x1080", "1920x1080", "1080x1920", "1200x1080"],
      },
      {
        name: "B",
        imageNames: [
          "1080x1080_2",
          "1920x1080_2",
          "1080x1920_2",
          "1200x1080_2",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Label",
    icon: <VideocamIcon />,
    variants: [
      {
        name: "1",
        imageNames: ["1080x1080_2", "1920x1080_2", "1080x1920", "1200x1080"],
      },
      {
        name: "2",
        imageNames: ["1080x1080", "1920x1080_2", "1080x1920_2", "1200x1080"],
      },
      {
        name: "3",
        imageNames: ["1080x1080", "1920x1080", "1080x1920_2", "1200x1080_2"],
      },
    ],
  },
  {
    id: 3,
    name: "Label",
    icon: <WebOutlinedIcon />,
    description: "description",
    variants: [{ name: "One", imageNames: [] }],
  },
];
