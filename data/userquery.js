module.exports = `
query ($name: String, $id: Int, $search: String){
	User(id: $id, name: $name, search: $search){
		id
		name
		about(asHtml: false)
		avatar{
      large
    }
		bannerImage
		options{
			profileColor
		}
		favourites{
			anime(page: 1, perPage: 5){
				edges{
					node{
						title{
							romaji
						}
						type
						format
						status
						siteUrl
					}
				}
			}
			manga(page: 1, perPage: 5){
				edges{
					node{
						title{
							romaji
						}
						type
						format
						status
						siteUrl
					}
				}
			}
			characters(page: 1, perPage: 5){
					nodes{
						name{
							first
							last
							alternative
						}
						siteUrl
					}
      }
		}
		stats{
			watchedTime
			chaptersRead
			animeStatusDistribution{
				status
				amount
			}
			mangaStatusDistribution{
				status
				amount
			}
			animeScoreDistribution{
				score
				amount
      }
      animeListScores{
        meanScore
        standardDeviation
      }
			mangaScoreDistribution{
				score
				amount
			}
      mangaListScores{
        meanScore
        standardDeviation
      }
			favouredGenresOverview{
				genre
				amount
				meanScore
				timeWatched
			}
      favouredYears{
        year
        amount
        meanScore
      }
    }
		siteUrl
		updatedAt
	}
}
`;
