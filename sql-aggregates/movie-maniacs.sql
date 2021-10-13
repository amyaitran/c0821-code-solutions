  select "customers"."firstName",
         "customers"."lastName",
         sum("payments"."amount")
    from "customers"
    join "payments" using ("customerId")
group by "customers"."firstName",
         "customers"."lastName"
order by sum("payments"."amount") desc
