import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Skeleton } from '@mui/material';
import concat from 'classnames';
import { getCurrencyFormat } from '../../../../../helpers/frontend-helpers/format-helper';
import PrimaryButton from '../../common/buttons/primary-button/primary-button';
import Carousel from '../../common/carousel/carousel';
import NumberSpinner from '../../common/inputs/number-spinner/number-spinner';
import scss from './dish-details.module.scss';

const skeletonSetting = {
  animation: 'pulse',
  variant: 'rounded'
};

function DishDetails({
  className,
  name,
  imageUrls,
  description,
  ingredients,
  energy,
  price,
  available,

  isLoading,
  newPage
}) {
  const formattedPrice = getCurrencyFormat(price);
  const descriptionSkeleton = Array(5)
    .fill(null)
    .map((_, index) => (
      <Skeleton
        key={index}
        {...skeletonSetting}
        className={scss['description-skeleton']}
      />
    ));
  return (
    <div className={newPage ? scss.section : ''}>
      <div className={concat(scss.details, className)}>
        <div className={scss.gallery}>
          {isLoading ? (
            <Skeleton {...skeletonSetting} height='100%' />
          ) : (
            <Carousel
              imageUrls={imageUrls}
              showIndicators
              autoPlay
              showThumbs={false}
            />
          )}
        </div>
        <div className={scss.content}>
          <div className={scss.header}>
            <h3 className={scss.name}>
              {isLoading ? (
                <Skeleton
                  {...skeletonSetting}
                  className={scss['name-skeleton']}
                />
              ) : (
                name
              )}
            </h3>
            <h4 className={scss.price}>
              {isLoading ? (
                <Skeleton
                  {...skeletonSetting}
                  className={scss['price-skeleton']}
                />
              ) : (
                formattedPrice
              )}
            </h4>
          </div>
          <p className={scss.description}>
            {isLoading ? descriptionSkeleton : description}
          </p>
          <div className={scss.actions}>
            {isLoading ? (
              <Skeleton
                {...skeletonSetting}
                className={scss['spinner-skeleton']}
              />
            ) : (
              <NumberSpinner className={scss.spinner} steps={1} />
            )}

            {isLoading ? (
              <Skeleton
                {...skeletonSetting}
                className={scss['add-to-cart-skeleton']}
              />
            ) : (
              <PrimaryButton
                disabled={!available}
                className={scss['add-to-cart']}
                onClick={() => {}}>
                <AddShoppingCartRoundedIcon />{' '}
                {available ? 'Thêm vào giỏ hàng' : 'Hết hàng'}
              </PrimaryButton>
            )}
          </div>
          <div className={scss['extra-info']}>
            {isLoading ? (
              <Skeleton
                {...skeletonSetting}
                className={scss['extra-info-heading-skeleton']}
              />
            ) : (
              <h4 className={scss['extra-info-heading']}>
                <InfoOutlinedIcon />
                Thông tin thêm
              </h4>
            )}

            <div className={scss.ingredients}>
              {isLoading ? (
                <Skeleton
                  {...skeletonSetting}
                  className={scss['ingredients-skeleton']}
                />
              ) : (
                <p>
                  <span>Nguyên liệu: </span>
                  {ingredients}
                </p>
              )}
            </div>
            <div className={scss.energy}>
              {isLoading ? (
                <Skeleton
                  {...skeletonSetting}
                  className={scss['energy-skeleton']}
                />
              ) : (
                <p>
                  <span>Năng lượng: </span>
                  {energy} cal{' '}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishDetails;
