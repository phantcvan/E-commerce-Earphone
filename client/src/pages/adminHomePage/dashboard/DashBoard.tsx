import { ResponsivePieCanvas } from "@nivo/pie";

const data = [
  {
    id: "headphones",
    label: "headphones",
    value: 250,
    color: "hsl(166, 70%, 50%)",
  },

  {
    id: "earphones",
    label: "earphones",
    value: 324,
    color: "hsl(276, 70%, 50%)",
  },

  {
    id: "accessories",
    label: "accessories",
    value: 161,
    color: "hsl(238, 70%, 50%)",
  },

  {
    id: "feature",
    label: "feature",
    value: 351,
    color: "hsl(225, 70%, 50%)",
  },

  {
    id: "trending",
    label: "trending",
    value: 477,
    color: "hsl(352, 70%, 50%)",
  },

  {
    id: "new",
    label: "new",
    value: 383,
    color: "hsl(316, 70%, 50%)",
  },
];

export const Dashboard = () => {
  return (
    <div className="h-[80vh]">
      <ResponsivePieCanvas
        data={data}
        margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "paired" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.6]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#333333"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        // fill={[
        //   {
        //     match: {
        //       id: "python",
        //     },
        //     id: "dots",
        //   },
        //   {
        //     match: {
        //       id: "scala",
        //     },
        //     id: "lines",
        //   },
        //   {
        //     match: {
        //       id: "lisp",
        //     },
        //     id: "lines",
        //   },
        //   {
        //     match: {
        //       id: "elixir",
        //     },
        //     id: "lines",
        //   },
        //   {
        //     match: {
        //       id: "javascript",
        //     },
        //     id: "lines",
        //   },
        // ]}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 140,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 60,
            itemHeight: 14,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 14,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
};
