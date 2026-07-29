"use client";

import { Search, RotateCcw } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PropertyFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [location, setLocation] = useState(searchParams.get("location") ?? "");

  const [type, setType] = useState(searchParams.get("type") ?? "");

  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") ?? "");

  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") ?? "");

  const [sortBy, setSortBy] = useState(
    searchParams.get("sortBy") ?? "createdAt",
  );

  const [sortOrder, setSortOrder] = useState(
    searchParams.get("sortOrder") ?? "desc",
  );

  const handleChange = () => {
   const params = new URLSearchParams();

      if (location) params.set("location", location);
      if (type) params.set("type", type);
      if (minPrice) params.set("minPrice", minPrice);
      if (maxPrice) params.set("maxPrice", maxPrice);

      params.set("sortBy", sortBy);
      params.set("sortOrder", sortOrder);

      params.set("page", "1");

      router.replace(`${pathname}?${params.toString()}`);
  };


  const resetFilters = () => {
    setLocation("");
    setType("");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("createdAt");
    setSortOrder("desc");

    router.push(`${pathname}`);
  };

  return (
    <div className="rounded-xl border bg-card p-2 md:p-4">
      <p className="mb-2 font-semibold">Filter</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {/* Location */}
        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* Category */}
        <Select value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Apartment">Apartment</SelectItem>

            <SelectItem value="Studio">Studio</SelectItem>

            <SelectItem value="House">House</SelectItem>

            <SelectItem value="Office">Office</SelectItem>
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select
          value={`${sortBy}-${sortOrder}`}
          onValueChange={(value) => {
            const [field, order] = value.split("-");

            setSortBy(field);
            setSortOrder(order);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="createdAt-desc">Newest</SelectItem>

            <SelectItem value="createdAt-asc">Oldest</SelectItem>

            <SelectItem value="price-asc">Price Low → High</SelectItem>

            <SelectItem value="price-desc">Price High → Low</SelectItem>

            <SelectItem value="title-asc">Title A → Z</SelectItem>
          </SelectContent>
        </Select>

        {/* Min Price */}
        <Input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        {/* Max Price */}
        <Input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button onClick={(e) => handleChange()} className="flex-1 sm:flex-none">
          <Search className="mr-2 h-4 w-4" />
          Filter
        </Button>

        <Button
          variant="outline"
          onClick={resetFilters}
          className="flex-1 sm:flex-none"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default PropertyFilter;
