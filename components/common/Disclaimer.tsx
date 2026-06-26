export function Disclaimer() {
  return (
    <footer className="mx-auto mt-12 w-full max-w-6xl px-4 pb-24 sm:px-6 lg:pb-8">
      <div className="glass rounded-3xl p-5 text-center text-sm text-muted">
        <p className="mx-auto max-w-2xl leading-relaxed">
          <span className="font-medium text-ink">Educational guidance only.</span>{" "}
          Baby Journey AI provides general, medically-grounded information about
          pregnancy. It does <span className="font-medium">not</span> replace
          prenatal care, diagnosis, or advice from a qualified healthcare
          professional. Every pregnancy is unique — always consult your clinician
          about your own health and your baby&apos;s.
        </p>
        <p className="mt-3 text-xs text-muted/80">
          Dates update automatically each day in India Standard Time (IST).
        </p>
      </div>
    </footer>
  );
}
