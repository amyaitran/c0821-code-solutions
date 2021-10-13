  select "categories"."name",
         count("categories".*) as "categoriesCount"
    from "actors"
    join "castMembers" using ("actorId")
    join "filmCategory" using ("filmId")
    join "categories" using ("categoryId")
   where "firstName" = 'Lisa' AND "lastName" = 'Monroe'
group by "categories"."name"
