import Resource from './resource';
import defaultResolver from './default-resolver';

// GraphQL
import shopQuery from './graphql/shopQuery.graphql';
import shopPolicyQuery from './graphql/shopPolicyQuery.graphql';
import localizationQuery from './graphql/localizationQuery.graphql';

/**
 * The JS Buy SDK shop resource
 * @class
 */
class ShopResource extends Resource {

  /**
   * Fetches shop information (`currencyCode`, `description`, `moneyFormat`, `name`, and `primaryDomain`).
   * See the {@link https://help.shopify.com/api/storefront-api/reference/object/shop|Storefront API reference} for more information.
   *
   * @example
   * client.shop.fetchInfo().then((shop) => {
   *   // Do something with the shop
   * });
   *
   * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the shop.
   */
  fetchInfo() {
    return this.graphQLClient
      .send(shopQuery)
      .then(defaultResolver('shop'));
  }

  /**
   * 
   * @returns a list of available countries that the store has enabled
   */
  fetchCountries() {
    return this.graphQLClient
      .send(localizationQuery)
      .then(defaultResolver('localization'));
  }

  /**
   * Fetches shop policies (privacy policy, terms of service and refund policy).
   *
   * @example
   * client.shop.fetchPolicies().then((shop) => {
   *   // Do something with the shop
   * });
   *
   * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the shop.
   */
  fetchPolicies() {
    return this.graphQLClient
      .send(shopPolicyQuery)
      .then(defaultResolver('shop'));
  }
}

export default ShopResource;
