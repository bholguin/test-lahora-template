import Script from 'next/script';
import parse, {Node} from 'node-html-parser';


type NodeTest = {
  rawAttrs?: string;
} & Node;

export const FormatScripts = (props: {
  scripts: string;
}) => {
  const headscripts = parse(props.scripts, {
    blockTextElements: {
      script: true,
    },
  });

  return (
    <>
      {headscripts.childNodes
        .filter((item) => item.rawTagName === 'script')
        .map((item: NodeTest, index) => {
          if (item?.rawAttrs) {
            const srcRegex = /src="([^">]+)"/g;
            const matches = [...item.rawAttrs.matchAll(srcRegex)];
            const src = matches[0][1];
            console.log(matches[0][1]);
            return (
              <Script
                key={index}
                src={src}
                async
                // strategy={'beforeInteractive'}
              />
            );
          } else {
            return (
              <script
                key={index}
                dangerouslySetInnerHTML={{
                  __html: item.textContent ?? '',
                }}
              />
            );
          }
        })}
    </>
  );
};
