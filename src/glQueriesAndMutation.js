import gql from 'graphql-tag'

export const POST_MUTATION = gql`
    # Mutation Alias / Local Function Name
    mutation PostMutation($countryName: String, 
                    $countryCode: String, 
                    $currency: String, 
                    $currencySymbol: String, 
                    $phoneCode: String) {
        # Mutation Name
        addCountry(countryName: $countryName,
            countryCode: $countryCode,
            currency: $currency,
            currencySymbol: $currencySymbol,
            phoneCode: $phoneCode) {
                countryId
                countryName
                countryCode
        }
    }
`

export const FEED_QUERY = gql`
  {
    countries {
        countryId
        countryName
        countryCode
        currency
        currencySymbol
        phoneCode
        status
        createdAt
        updatedAt
    }
  }
`

