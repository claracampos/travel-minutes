import React from "react";

const PaginationFooter = props => {
  const { pagination, setPagination, entriesLength } = props;

  if (entriesLength < 2) {
    return (
      <div>
        <p>End of journal.</p>
        {pagination.start > 0 && (
          <button
            onClick={() =>
              setPagination({
                start: pagination.start - 2,
                end: pagination.end - 2
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
              start: pagination.start - 2,
              end: pagination.end - 2
            })
          }
        >
          Back
        </button>
      )}
      <button
        onClick={() =>
          setPagination({
            start: pagination.start + 2,
            end: pagination.end + 2
          })
        }
      >
        Next
      </button>
    </div>
  );
};

export default PaginationFooter;
