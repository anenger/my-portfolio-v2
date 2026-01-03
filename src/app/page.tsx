import { MasonryLayout, Card } from "@/components";

export default function Home() {
  return (
    <div className="dotted-background min-h-screen p-3 md:p-4 lg:p-6">
      <main className="container mx-auto max-w-7xl">
        <MasonryLayout columns={3}>
          <Card
            size="1x1"
            title="Your Name"
            subtitle="Full Stack Developer"
            body="Building digital experiences"
          />

          <Card size="1x1" title="Location" subtitle="San Francisco, CA" />

          <Card size="1x2" title="Current Role">
            <div className="mb-2">
              <p className="text-[10px] font-medium opacity-90">
                Senior Developer
              </p>
              <p className="text-[9px] opacity-70">Tech Company Inc.</p>
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="bg-border/20 rounded px-1.5 py-0.5 text-[9px]">
                React
              </span>
              <span className="bg-border/20 rounded px-1.5 py-0.5 text-[9px]">
                TS
              </span>
              <span className="bg-border/20 rounded px-1.5 py-0.5 text-[9px]">
                Node
              </span>
            </div>
          </Card>
          <Card size="2x1" title="Current Role">
            <div className="mb-2">
              <p className="text-[10px] font-medium opacity-90">
                Senior Developer
              </p>
              <p className="text-[9px] opacity-70">Tech Company Inc.</p>
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="bg-border/20 rounded px-1.5 py-0.5 text-[9px]">
                React
              </span>
              <span className="bg-border/20 rounded px-1.5 py-0.5 text-[9px]">
                TS
              </span>
              <span className="bg-border/20 rounded px-1.5 py-0.5 text-[9px]">
                Node
              </span>
            </div>
          </Card>
        </MasonryLayout>
      </main>
    </div>
  );
}
