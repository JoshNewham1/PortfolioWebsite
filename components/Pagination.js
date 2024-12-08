import Link from "next/link";
import { useMemo } from "react";

const range = (start, end) => {
  let links = [];

  for (let i = start; i <= end; i++) {
    links.push(i);
  }

  return links;
};

export default function Pagination({ numPages, currentPage, basePath }) {
  const INACTIVE_PAGES = 1;
  const DOTS = "...";

  const paginationLinks = useMemo(() => {
    // First page + current page + last page + 2 inactive pages either side
    // e.g. 1 ... 45 46 47 ... 99
    let totalLinks = 3 + INACTIVE_PAGES * 2;

    // Case 1: If there is enough space to show all pages without a '...'
    if (totalLinks >= numPages) {
      return range(1, numPages);
    }

    // Leftmost and rightmost page number (from the current)
    const leftPageIndex = Math.max(currentPage - INACTIVE_PAGES, 1);
    const rightPageIndex = Math.min(currentPage + INACTIVE_PAGES, numPages);

    // Only show dots when there are >1 pages between current and leftmost / rightmost
    const showLeftDots = leftPageIndex > 2;
    const showRightDots = rightPageIndex < numPages - 1;

    const firstPageIndex = 1;
    const lastPageIndex = numPages;

    // Case 2: If there are no left dots to show but there are right dots
    if (!showLeftDots && showRightDots) {
      const numLeftItems = 3 + 2 * INACTIVE_PAGES;
      return [...range(1, numLeftItems), DOTS, numPages];
    }

    // Case 3: If there are no right dots to show but there are left dots
    if (showLeftDots && !showRightDots) {
      const numRightItems = 3 + 2 * INACTIVE_PAGES;
      const rightRange = range(numPages - numRightItems + 1, numPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    // Case 4: Both left and right dots to be shown
    if (showLeftDots && showRightDots) {
      const middleRange = range(leftPageIndex, rightPageIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [numPages, currentPage, INACTIVE_PAGES, DOTS]);

  return (
    (<div>
      {paginationLinks?.map((pageNum, i) => {
        let slug = pageNum;
        if (pageNum === DOTS && i === 1) {
          // Left dots, go back to page 2
          slug = 2;
        } else if (pageNum === DOTS) {
          // Right dots, go to rightmost page - 1
          slug = numPages - 1;
        }

        return (
          (<Link
            key={`pagination-${i}`}
            href={`${basePath}/${slug}`}
            className={
              "px-4 py-2 mr-2  dark:text-white rounded " +
              // Highlight if current page
              (currentPage == pageNum
                ? "bg-purple-500 text-white"
                : "text-black hover:bg-purple-500 hover:text-white")
            }>

            {pageNum}

          </Link>)
        );
      })}
    </div>)
  );
}
