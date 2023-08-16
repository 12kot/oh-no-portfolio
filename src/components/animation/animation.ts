type fromTo = {
  from: number;
  to: number;
};

type Props = {
  x?: fromTo;
  y?: fromTo;
  opacity?: fromTo;
  duration?: number;
};

export const GetAnimationSettings = (props?: Props) => {
  return {
    hidden: {
      x: props?.x?.from || 0,
      y: props?.y?.from || 0,
      opacity: props?.opacity?.from || 0,
    },
    visible: (custom: number) => ({
      x: props?.x?.to || 0,
      y: props?.y?.to || 0,
      opacity: props?.opacity?.to || 1,
      transition: {
        delay: custom * 0.2,
        duration: props?.duration,
      },
    }),
  };
};
