// Sabit arka plan: ince grid dokusu + yumuşak gradient ışık küreleri.
// Küreler sadece hareket azaltma kapalıyken hafifçe süzülür.
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

      <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent/25 blur-[130px] motion-safe:animate-float-slow" />
      <div className="absolute -right-48 top-1/3 h-[32rem] w-[32rem] rounded-full bg-violet/25 blur-[130px] motion-safe:animate-float-slower" />
      <div className="absolute -bottom-40 left-1/4 h-[26rem] w-[26rem] rounded-full bg-teal/15 blur-[130px]" />
    </div>
  );
}
