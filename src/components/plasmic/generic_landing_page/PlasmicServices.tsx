// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b5RPt1u9wHcNZxgruVm6bk
// Component: fK3zhPiwBcTXSB
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
import Navbar from "../../Navbar"; // plasmic-import: xR0UtZid-5xVxD/component
import ValueProp from "../../ValueProp"; // plasmic-import: 40NMgFkLg9tZGw/component
import PriceCard from "../../PriceCard"; // plasmic-import: QNL51K7KMJjCYM/component
import FooterSection from "../../FooterSection"; // plasmic-import: PHvU7ioIEAdP_M/component

import { useScreenVariants as useScreenVariantsy8CyAml2TJsYv } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -y8CyAml2tJsYv/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_generic_landing_page.module.css"; // plasmic-import: b5RPt1u9wHcNZxgruVm6bk/projectcss
import sty from "./PlasmicServices.module.css"; // plasmic-import: fK3zhPiwBcTXSB/css

import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: tWKQx5j1oGuCQO/icon
import TargetIcon from "./icons/PlasmicIcon__Target"; // plasmic-import: DwqtnhsO2qDd9f/icon
import FastIcon from "./icons/PlasmicIcon__Fast"; // plasmic-import: _rqAswGEQC47Pp/icon
import StrongIcon from "./icons/PlasmicIcon__Strong"; // plasmic-import: sdoGXrkEpACyhd/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: 67QM9MPGulNuZ_/icon
import chartEQv4XvllLy9NMx from "./images/chart.png"; // plasmic-import: EQv4xvllLY9nMx/picture
import sparkleGgNau8XHz5Cd0R from "./images/sparkle.png"; // plasmic-import: GgNau8xHz5Cd0R/picture
import medal2U8NQmQ0PUsAqM from "./images/medal.png"; // plasmic-import: 2U8NQmQ0pUSAqM/picture
import trophyLBb2CCBhpUxx6 from "./images/trophy.png"; // plasmic-import: lBb2cC_BHPUxx6/picture

export type PlasmicServices__VariantMembers = {};

export type PlasmicServices__VariantsArgs = {};
type VariantPropType = keyof PlasmicServices__VariantsArgs;
export const PlasmicServices__VariantProps = new Array<VariantPropType>();

export type PlasmicServices__ArgsType = {};
type ArgPropType = keyof PlasmicServices__ArgsType;
export const PlasmicServices__ArgProps = new Array<ArgPropType>();

export type PlasmicServices__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  foreground?: p.Flex<"div">;
  foreground2?: p.Flex<"div">;
  section?: p.Flex<"section">;
  foreground3?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  columns?: p.Flex<"div">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultServicesProps {
  className?: string;
}

export const defaultServices__Args: Partial<PlasmicServices__ArgsType> = {};

function PlasmicServices__RenderFunc(props: {
  variants: PlasmicServices__VariantsArgs;
  args: PlasmicServices__ArgsType;
  overrides: PlasmicServices__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultServices__Args, props.args);
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsy8CyAml2TJsYv()
  });

  return (
    <React.Fragment>
      {}
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___6Psif)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground"}
              data-plasmic-override={overrides.foreground}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oOsF
                )}
              >
                {"Our services"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6Yv7H
                )}
              >
                {
                  "A euismod eros a hendrerit tristique suscipit sit aptent dolor adipiscing inceptos cras ullamcorper a vivamus parturient."
                }
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp__gGquP)}
                description={
                  "Quis iaculis tempor a condimentum per eu montes quis inceptos mi et dis suspendisse integer dui. Orci ad pharetra a vestibulum parturient mauris ac nisl cursus at a vestibulum morbi conubia suspendisse massa vestibulum a varius."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__niOu)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: chartEQv4XvllLy9NMx,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Accomplish more"}
              />

              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp__rcBMl)}
                description={
                  "Ut interdum consectetur a interdum parturient blandit vestibulum vel quisque quis lorem libero imperdiet a sed massa quisque rhoncus sed cum quisque morbi."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__aIyp5)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: sparkleGgNau8XHz5Cd0R,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Best-in-class"}
              />

              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp__g4Jn)}
                description={
                  "Ullamcorper adipiscing adipiscing euismod odio nascetur eu magnis pretium arcu fermentum a eget cubilia tempor. Eu cubilia sodales vestibulum massa non ipsum consectetur lorem nibh parturient parturient vestibulum cum cras penatibus donec dui sit sed eleifend conubia condimentum parturient rutrum."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__qtNq)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: medal2U8NQmQ0PUsAqM,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Championship award-winners"}
              />

              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp__aMcEf)}
                description={
                  "Est parturient imperdiet proin inceptos parturient dignissim risus auctor cubilia cum iaculis eu feugiat justo eu vel at non nisl laoreet ligula porttitor a nunc ac cum habitant urna."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__yLn4S)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: trophyLBb2CCBhpUxx6,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Destined for greatness"}
              />
            </p.Stack>
          </p.Stack>

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground3"}
              data-plasmic-override={overrides.foreground3}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__xVAvt)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__bkGkI)}>
                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {"Next-level"}
                  </h2>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rFlDz
                  )}
                >
                  {"Dui urna enim a tempus commodo adipiscing ullamcorper."}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__oXi6A)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__sdcd0)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__d7DS
                      )}
                      darkBackground={true}
                      description={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__fjAw
                          )}
                        >
                          {
                            "Nulla odio mauris enim parturient adipiscing vestibulum inceptos."
                          }
                        </div>
                      }
                      icon={
                        <HammerIcon
                          className={classNames(projectcss.all, sty.svg__qhEcC)}
                          role={"img"}
                        />
                      }
                      title={"Harder"}
                      vertical={true}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__n0V9C)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp___9I1Th
                      )}
                      darkBackground={true}
                      description={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__z2Cv8
                          )}
                        >
                          {
                            "Consequat scelerisque a eros taciti nisl a sodales."
                          }
                        </div>
                      }
                      icon={
                        <TargetIcon
                          className={classNames(projectcss.all, sty.svg__sOFG)}
                          role={"img"}
                        />
                      }
                      title={"Better"}
                      vertical={true}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__qoOjI)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__xHBtn
                      )}
                      darkBackground={true}
                      description={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___7V4Mm
                          )}
                        >
                          {
                            "Varius ad malesuada ullamcorper cursus scelerisque a a."
                          }
                        </div>
                      }
                      icon={
                        <FastIcon
                          className={classNames(projectcss.all, sty.svg__mTuol)}
                          role={"img"}
                        />
                      }
                      title={"Faster"}
                      vertical={true}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__iXLa8)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__xbTz
                      )}
                      darkBackground={true}
                      description={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__lWRak
                          )}
                        >
                          {
                            "Ut eu nam nostra taciti congue adipiscing curabitur."
                          }
                        </div>
                      }
                      icon={
                        <StrongIcon
                          className={classNames(projectcss.all, sty.svg___6G0T)}
                          role={"img"}
                        />
                      }
                      title={"Stronger"}
                      vertical={true}
                    />
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </section>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__kcWO)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__tCh2S)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__zk8Nr)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___6Xx6S)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xNoPp
                    )}
                  >
                    {"Pricing plans"}
                  </div>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wHqbq
                  )}
                >
                  {
                    "Nascetur nascetur ridiculus scelerisque adipiscing a nascetur varius sed eu a ad semper a est nec litora ante at orci rhoncus a varius auctor aliquam inceptos vestibulum ridiculus."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__o1Z2H)}
              >
                <PriceCard
                  className={classNames("__wab_instance", sty.priceCard__krk3C)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__exB4T
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__teC9Z
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__bejX
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__gGxnK
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />
                    </React.Fragment>
                  }
                  dollars={"0"}
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___5UUy0
                      )}
                    >
                      {"Buy Pro"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__walD)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__uy8AP
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__o6DVm
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__kkPa8
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__m9KN2
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__ivj0E
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__myczM
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />
                    </React.Fragment>
                  }
                  dollars={"8"}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cpznc
                      )}
                    >
                      {"Pro"}
                    </div>
                  }
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yXihO
                      )}
                    >
                      {"Buy Team"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__wmcIw)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__rOtcL
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__idoE
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__a7Kvl
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__szRla
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__uAoRw
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__odOyt
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__yx9Lz
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__rCzoa
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />
                    </React.Fragment>
                  }
                  dollars={"16"}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___3IZnK
                      )}
                    >
                      {"Team"}
                    </div>
                  }
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gb3G
                      )}
                    >
                      {"Contact us"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__eQaPb)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___4RVfh
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___9Kg7Q
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__t8Bl5
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__uy4JS
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__yyUz
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__v4S2O
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__g75Rw
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__bDz9Y
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />
                    </React.Fragment>
                  }
                  dollars={"?"}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__aagMy
                      )}
                    >
                      {"Enterprise"}
                    </div>
                  }
                  primary={true}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "foreground",
    "foreground2",
    "section",
    "foreground3",
    "h2",
    "columns",
    "footerSection"
  ],
  navbar: ["navbar"],
  foreground: ["foreground"],
  foreground2: ["foreground2"],
  section: ["section", "foreground3", "h2", "columns"],
  foreground3: ["foreground3", "h2", "columns"],
  h2: ["h2"],
  columns: ["columns"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  foreground: "div";
  foreground2: "div";
  section: "section";
  foreground3: "div";
  h2: "h2";
  columns: "div";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServices__VariantsArgs;
    args?: PlasmicServices__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicServices__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicServices__ArgProps,
      internalVariantPropNames: PlasmicServices__VariantProps
    });

    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    foreground: makeNodeComponent("foreground"),
    foreground2: makeNodeComponent("foreground2"),
    section: makeNodeComponent("section"),
    foreground3: makeNodeComponent("foreground3"),
    h2: makeNodeComponent("h2"),
    columns: makeNodeComponent("columns"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps
  }
);

export default PlasmicServices;
/* prettier-ignore-end */
