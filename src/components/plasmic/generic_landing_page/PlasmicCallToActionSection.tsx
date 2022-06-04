// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b5RPt1u9wHcNZxgruVm6bk
// Component: z1c4K8RUTuiXDd
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: exaChs5OpyNqIG/component

import { useScreenVariants as useScreenVariantsy8CyAml2TJsYv } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -y8CyAml2tJsYv/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_generic_landing_page.module.css"; // plasmic-import: b5RPt1u9wHcNZxgruVm6bk/projectcss
import sty from "./PlasmicCallToActionSection.module.css"; // plasmic-import: z1c4K8RUTuiXDd/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: Mk-opdyVNM2sVB/icon
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: 41WWgTM5XmK-m0/icon
import meetingTIaaVqGn1FbnTk from "./images/meeting.jpeg"; // plasmic-import: tIaaVqGN1fbnTk/picture

export type PlasmicCallToActionSection__VariantMembers = {};

export type PlasmicCallToActionSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicCallToActionSection__VariantsArgs;
export const PlasmicCallToActionSection__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCallToActionSection__ArgsType = {
  image?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCallToActionSection__ArgsType;
export const PlasmicCallToActionSection__ArgProps = new Array<ArgPropType>(
  "image",
  "children"
);

export type PlasmicCallToActionSection__OverridesType = {
  root?: p.Flex<"div">;
  art?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  blend?: p.Flex<"div">;
  copy?: p.Flex<"div">;
};

export interface DefaultCallToActionSectionProps {
  image?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  children?: React.ReactNode;
  className?: string;
}

export const defaultCallToActionSection__Args: Partial<PlasmicCallToActionSection__ArgsType> =
  {
    image: {
      src: meetingTIaaVqGn1FbnTk,
      fullWidth: 2916,
      fullHeight: 1787,
      aspectRatio: undefined
    }
  };

function PlasmicCallToActionSection__RenderFunc(props: {
  variants: PlasmicCallToActionSection__VariantsArgs;
  args: PlasmicCallToActionSection__ArgsType;
  overrides: PlasmicCallToActionSection__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultCallToActionSection__Args, props.args);
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsy8CyAml2TJsYv()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__fsgy)}>
        <div
          data-plasmic-name={"art"}
          data-plasmic-override={overrides.art}
          className={classNames(projectcss.all, sty.art)}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            src={args.image}
          />

          {true ? (
            <div
              data-plasmic-name={"blend"}
              data-plasmic-override={overrides.blend}
              className={classNames(projectcss.all, sty.blend)}
            />
          ) : null}
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__rPLc)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__oPyYt)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"copy"}
              data-plasmic-override={overrides.copy}
              hasGap={true}
              className={classNames(projectcss.all, sty.copy)}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__bE1ZL)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___5PVm
                        )}
                      >
                        {"Welcome"}
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___6RO9E
                        )}
                      >
                        {"Let's get going"}
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__pa9Yf
                        )}
                      >
                        {
                          "Consectetur a adipiscing sagittis sed proin libero himenaeos ornare adipiscing suscipit leo vestibulum facilisi consequat nisi nisi adipiscing habitant facilisis suspendisse hac integer eget quam facilisis sem placerat fames."
                        }
                      </div>
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___8IAps
                      )}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__p4S37
                        )}
                        color={"blue" as const}
                        endIcon={
                          <ChevronRightIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__yimE0
                            )}
                            role={"img"}
                          />
                        }
                        showEndIcon={true}
                      >
                        {"Start now"}
                      </Button>

                      <Button
                        bgDifference={true}
                        className={classNames(
                          "__wab_instance",
                          sty.button__hd3H4
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__oQ2SQ
                          )}
                        >
                          {"Learn more…"}
                        </div>
                      </Button>
                    </p.Stack>
                  </React.Fragment>
                ),
                value: args.children
              })}
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "art", "img", "blend", "copy"],
  art: ["art", "img", "blend"],
  img: ["img"],
  blend: ["blend"],
  copy: ["copy"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  art: "div";
  img: typeof p.PlasmicImg;
  blend: "div";
  copy: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCallToActionSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCallToActionSection__VariantsArgs;
    args?: PlasmicCallToActionSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCallToActionSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCallToActionSection__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCallToActionSection__ArgProps,
      internalVariantPropNames: PlasmicCallToActionSection__VariantProps
    });

    return PlasmicCallToActionSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCallToActionSection";
  } else {
    func.displayName = `PlasmicCallToActionSection.${nodeName}`;
  }
  return func;
}

export const PlasmicCallToActionSection = Object.assign(
  // Top-level PlasmicCallToActionSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    art: makeNodeComponent("art"),
    img: makeNodeComponent("img"),
    blend: makeNodeComponent("blend"),
    copy: makeNodeComponent("copy"),

    // Metadata about props expected for PlasmicCallToActionSection
    internalVariantProps: PlasmicCallToActionSection__VariantProps,
    internalArgProps: PlasmicCallToActionSection__ArgProps
  }
);

export default PlasmicCallToActionSection;
/* prettier-ignore-end */
