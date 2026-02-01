export default function TeamSection() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Team photo placeholder */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-background md:w-1/2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="mx-auto h-20 w-20 text-muted-foreground/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="mt-2 text-sm text-muted-foreground/40">Team Photo</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              Our Team
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance">
              Family-Owned, Professionally Run
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Sentra Autoglass started as a family business with one simple goal: deliver honest, 
              quality work that we can stand behind. Every technician on our team shares this commitment.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We treat every vehicle as if it were our own. That&apos;s why we offer up to 3 years warranty 
              on our installations — because we trust our workmanship.
            </p>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-border"></div>
              <span className="text-sm font-medium text-muted-foreground">
                Quality work, honest service
              </span>
              <div className="h-px flex-1 bg-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
