Hello World! It was another fresh start at DBC. I made the "courageous" decision last week to repeat phase 1. Why? I just didn't feel as comfortable as I wanted with the material. <---insert heartfelt post about how I came to my decision-->

It's already late, so the main takeaway I want to give is:
Having issues with Prime? Well there's a nice little Prime class you can use that is extra handy!

require 'prime'

2.prime?
=> true
1.prime?
=> false
7.prime?
=> true

Prime.each(15) do |prime|
  p prime
end

=> 2,3,5,7,11,13

1 is NOT a prime!