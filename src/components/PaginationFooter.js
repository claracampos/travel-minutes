import React from "react";

const PaginationFooter = props => {
  const { pagination, setPagination, entriesLength } = props;

  if (entriesLength < 10) {
    return (
      <div>
        <p>End of journal.</p>
        {pagination.start > 0 && (
          <button
            onClick={() =>
              setPagination({
                end: pagination.start,
                start: pagination.start - 10
              })
            }
          >
            Back
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      {pagination.start > 0 && (
        <button
          onClick={() =>
            setPagination({
              end: pagination.start,
              start: pagination.start - 10
            })
          }
        >
          Back
        </button>
      )}
      <button
        onClick={() =>
          setPagination({
            start: pagination.end,
            end: pagination.end + 10
          })
        }
      >
        Next
      </button>
    </div>
  );
};

export default PaginationFooter;
