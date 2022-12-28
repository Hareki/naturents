import concat from 'classnames';
import NextImage from 'next/image';
import { forwardRef } from 'react';
import scss from './fill-image.module.scss';

const FillImage = forwardRef(
  (
    {
      width,
      height,
      src,
      alt,
      sizes,
      wrapperClasses,
      imgClasses,
      children,
      quality,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        style={{ width, height }}
        className={concat(scss['image-wrapper'], wrapperClasses)}>
        <NextImage
          className={imgClasses}
          quality={quality}
          src={src}
          alt={alt}
          sizes={sizes ? sizes : '50vw'}
          {...props}
          fill
        />
        {children}
      </div>
    );
  }
);
FillImage.displayName = 'FillImage';

export default FillImage;
