export type GoogleReviewSummary = {
  displayName: string;
  rating: number;
  userRatingCount: number | null;
  googleMapsUri: string | null;
  isFallback: boolean;
};

type GooglePlaceDetailsResponse = {
  displayName?: {
    text?: string;
  };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
};

const fallbackGoogleReview: GoogleReviewSummary = {
  displayName: "AdvancedTax",
  rating: 5,
  userRatingCount: null,
  googleMapsUri: null,
  isFallback: true
};

export async function getGoogleReviewSummary(): Promise<GoogleReviewSummary> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallbackGoogleReview;
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "displayName,rating,userRatingCount,googleMapsUri"
        },
        next: {
          revalidate: 86400
        }
      }
    );

    if (!response.ok) {
      return fallbackGoogleReview;
    }

    const data = (await response.json()) as GooglePlaceDetailsResponse;
    const rating = typeof data.rating === "number" ? data.rating : fallbackGoogleReview.rating;

    return {
      displayName: data.displayName?.text || fallbackGoogleReview.displayName,
      rating,
      userRatingCount:
        typeof data.userRatingCount === "number" ? data.userRatingCount : null,
      googleMapsUri: data.googleMapsUri || null,
      isFallback: false
    };
  } catch {
    return fallbackGoogleReview;
  }
}
