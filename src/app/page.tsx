"use client";
import IconBad from "@/components/Icons/IconBad";
import IconGood from "@/components/Icons/IconGood";
import IconThis from "@/components/Icons/IconThis";
import Panel from "@/components/Panel/Panel";
import { useColorStore } from "@/stores/colorStore";
import { useTogglesStore } from "@/stores/togglesStore";
import { useWordStore } from "@/stores/wordStore";

export default function Home() {
  const { isWhiteOutline, isBoldOutline } = useTogglesStore();
  const { currentColor } = useColorStore();
  const { words } = useWordStore();
  return (
    <>
      <label
        htmlFor="my-drawer"
        className="absolute top-[45%] left-0 bg-[#EFEFEF] h-[10%] w-20 z-100"
      />
      <main className="grid grid-cols-5 h-screen p-10 ml-16 bg-white gap-14">
        <section className="h-full grid grid-rows-7 gap-10 col-span-4">
          <div className="flex gap-4 items-center w-full rounded-lg h-full bg-[#E2E2E2] card-shadow-off px-8">
            {words.map((word) => {
              return (
                <div
                  key={word + Math.random()}
                  className="text-5xl text-black"
                >{`"${word}"`}</div>
              );
            })}
          </div>
          <div className="row-span-6 flex flex-col gap-10">
            <div className="flex gap-10">
              <IconGood
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
                iconColor={currentColor}
              />
              <IconBad
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
                iconColor={currentColor}
              />
              <IconThis
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
                iconColor={currentColor}
              />
              <IconGood
                strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
                strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
                iconColor={currentColor}
              />
            </div>
            <div className="flex gap-10 grow">
              <Panel word={""} />
              <Panel word={""} />
              <Panel word={""} />
              <Panel word={""} />
            </div>
            <div className="flex gap-10 grow">
              <Panel word={""} />
              <Panel word={""} />
              <Panel word={""} />
              <Panel word={""} />
            </div>
          </div>
        </section>
        <aside className="grid grid-cols-2 grid-rows-7 gap-10">
          <div className="col-span-2 flex gap-10">
            <Panel word={""} />
            <Panel word={""} />
          </div>
          <div className="col-span-2">
            <Panel word={""} />
          </div>
          <div className="col-span-2 row-span-3 flex flex-col gap-16 h-full pt-8">
            <div className="flex gap-10 grow">
              <Panel word={"Delete"} className="text-3xl text-black">
                Delete
              </Panel>
              <Panel word={"Clear"} className="text-3xl text-black">
                Clear
              </Panel>
            </div>
            <div className="flex gap-10 grow">
              <Panel word={""} />
              <Panel word={""} />
            </div>
            <div className="flex gap-10 grow">
              <Panel word={""} />
              <Panel word={""} />
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-10">
            <Panel word={""} />
            <Panel word={""} />
          </div>
          <div className="flex  col-span-2 justify-end items-end">
            <div className="flex gap-10 h-1/2 w-full">
              <Panel word={""} />
              <Panel word={""} />
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}
