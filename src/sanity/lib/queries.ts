import { groq } from 'next-sanity'

export const PROPERTIES_QUERY = groq`*[_type == "property" && category != "Renovasi"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  category,
  status,
  price,
  luas,
  mainImage,
  gallery,
  description
}`

export const RECENT_PROPERTIES_QUERY = groq`*[_type == "property" && category != "Renovasi"] | order(_createdAt desc)[0...3] {
  _id,
  title,
  slug,
  category,
  status,
  price,
  luas,
  mainImage,
  gallery
}`

export const PROPERTY_BY_SLUG_QUERY = groq`*[_type == "property" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  status,
  price,
  luas,
  mainImage,
  gallery,
  description
}`

export const RUMAH_QUERY = groq`*[_type == "property" && category == "Rumah"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  category,
  status,
  price,
  luas,
  mainImage
}`

export const TANAH_QUERY = groq`*[_type == "property" && category == "Tanah Kapling"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  category,
  status,
  price,
  luas,
  mainImage
}`

export const RENOVASI_QUERY = groq`*[_type == "property" && category == "Renovasi"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  category,
  status,
  price,
  luas,
  mainImage,
  gallery,
  description
}`
