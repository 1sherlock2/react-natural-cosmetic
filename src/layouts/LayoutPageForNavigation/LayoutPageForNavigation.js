import React, { useMemo } from 'react';
import { Categories } from '../../components/Utils/Categories/Categories';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import s from './LayoutPageForNavigation.scss';

const LayoutPageForNavigation = ({
  priceIndex,
  count,
  text,
  increaseCount,
  decreaseCount,
  isLoaded,
  selectItemsDispatch,
  selectCategoriesItemFunc,
  selectCategoriesItem,
  activeCategoried,
  selectCategories,
  defaultHeaderName,
  categories,
  items,
  product,
  activePriceDifferent,
  selectItem,
  addInBasket,
  }) => {
  return (
    <div>
      <Categories
        selectCategoriesItem={selectCategoriesItem}
        selectCategoriesItemFunc={selectCategoriesItemFunc}
        activeCategoried={activeCategoried}
        selectCategories={selectCategories}
        categories={categories}
        defaultHeaderName={defaultHeaderName}
      />
      <div className={s.container_fluid}>
        <div className={s.container_info}>
          {!product ? (
            <div>
              {isLoaded && (
                <div className={s.default_block}>
                  <img src={isLoaded.img} alt='stocks' />
                  <div className={s.default_block_otherInformation}>{isLoaded.otherInformation}</div>
                </div>
              )}
            </div>
          ) : (
            product &&
            product.map((item, index) => {
              return (
                <div>
                  <div className={classNames(s.card, s.card_elements)} key={`${item.id} ${index}`}>
                    <img className={s.card_img_top} src={item.img} alt='Card image cap' />
                    <div className={s.card_body}>
                      <h5 className={s.card_title}>{item.name}</h5>
                      <p className={s.card_text}>{item.description} </p>
                      <div className={s.price_different}>
                        {text.map((element, index) => (
                          <span
                            key={`${element.id} ${index}`}
                            onClick={() => selectItem(index)}
                            className={classNames({ active: activePriceDifferent === index})}
                          >
                            {element}
                          </span>
                        ))}
                      </div>
                      <ul className={classNames(s.list_group, 'list-group-flush')}>
                        {priceIndex === 0 ? (
                          <div>
                            <div className={classNames('btn-group', s.count)}>
                              <div className={s.count_span}>
                                <button
                                  type='button'
                                  className={classNames('btn', 'btn-secondary', s.btn_secondary_1)}
                                  onClick={() => decreaseCount()}>
                                  -
                                </button>
                                <span>{count}</span>
                                <button
                                  type='button'
                                  className={classNames('btn', 'btn-secondary', s.btn_secondary_2)}
                                  onClick={() => increaseCount()}>
                                  +
                                </button>
                              </div>
                              <div className={s.stocks_count_ul}>
                                <div className={classNames('list-group-item', s.product_price)}>{item.price} $</div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className={s.stocks_count_ul}>
                            <div className={classNames('list-group-item', s.product_price, s.price_different_roznica)}>
                              {item.price} $
                            </div>
                          </div>
                        )}
                      </ul>
                      <button
                        type='button'
                        class={classNames('btn', 'btn-primary', 'btn-sm')}
                        onClick={() => addInBasket(item, count)}>
                        Добавить в корзину
                      </button>
                    </div>
                  </div>
                  <div сlassName={s.reviews}>
                    <h3> Отзывы: </h3>
                    <div className={s.card}>
                      <div className={s.card_body}>
                        <h5 className={classNames('card-title')}>Card title</h5>
                        <h6 className={classNames('card-subtitle', 'mb-2', 'text-muted')}>Card subtitle</h6>
                        <p className={classNames('card-text')}>
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <span href='#' className={classNames('card-link')}>
                          Card link
                        </span>
                        <span href='#' className={classNames('card-link')}>
                          Another link
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className={s.container_products}>
          {items &&
            items.map((item, index) => {
              return (
                <NavLink to='#'>
                  <div className='card' key={`${index} ${item.id}`} onClick={() => selectItemsDispatch(item._id)}>
                    <img className='card-img-top' src={item.img} alt='Card image cap' />
                    <div className='card-body'>
                      <div className='card_body_grid'>
                        <p className='card-text card_items_name'>{item.name} </p>
                        <p className='card-text card_items_brend'>{item.brend} </p>
                        <p className='card-text card_items_price'>{item.price} р.</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
        </div>
      </div>
    </div>
  )
};
export default LayoutPageForNavigation;