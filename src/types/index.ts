export interface Stay {
  _id: string
  name: string
  summary: string
  interaction: string
  houseRules: string
  propertyType: string
  roomType: string
  bedType: string
  cancellationPolicy: string
  capacity: number
  bedrooms: number
  beds: number
  numOfReviews: number
  amenities: string[]
  host: {
    _id: string
    fullname: string
    location: string
    about: string
    responseTime: string
    thumbnailUrl: string
    pictureUrl: string
    isSuperhost: boolean
    id: string
  }
  address: {
    street: string
    country: string
    location: {
      lat: number
      lan: number
    }
    countryCode: string
    city: string
  }
  id: string
  bathrooms: number
  price: number
  securityDeposit: number
  cleaningFee: number | null
  extraPeople: number
  reviewScores: {
    accuracy: number
    cleanliness: number
    checkin: number
    communication: number
    location: number
    value: number
    rating: number
  }
  reviews: {
    at: string
    by: {
      _id: string
      fullname: string
      imgUrl: string
      id: string
    }
    txt: string
  }[]
}
