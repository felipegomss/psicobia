interface BackgroundBlurProps {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  rotate: string;
}

const BackgroundBlur: React.FC<BackgroundBlurProps> = ({
  top,
  left,
  bottom,
  rotate,
}) => (
  <div
    aria-hidden="true"
    className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
    style={{ top, bottom }}
  >
    <div
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        left,
        transform: `rotate(${rotate})`,
      }}
      className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
    />
  </div>
);

export default BackgroundBlur;
