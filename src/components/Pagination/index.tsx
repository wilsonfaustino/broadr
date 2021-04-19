import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRecords: number;
  recordsPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function* range(min: number, max: number) {
  for (let x = min; x < max; x++) {
    yield x + 1;
  }
}

export function Pagination({
  totalCountOfRecords,
  recordsPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const toPaginationItem = page => {
    return (
      <PaginationItem
        key={page}
        number={page}
        onPageChange={onPageChange}
        isCurrent={currentPage === page}
      />
    );
  };

  const lastPage = Math.ceil(totalCountOfRecords / recordsPerPage);
  const lowestPage = Math.max(0, currentPage - siblingsCount - 1);
  const highestPage = Math.min(currentPage + siblingsCount, lastPage);
  const pages = Array.from(range(lowestPage, highestPage), toPaginationItem);

  const initialItemOnCount =
    currentPage > 1 ? currentPage * recordsPerPage - recordsPerPage + 1 : 1;

  const lastItemOnCount =
    currentPage < lastPage ? currentPage * recordsPerPage : totalCountOfRecords;

  return (
    <Stack
      direction={['column', 'row']}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <Text>
          <Text as="strong">{initialItemOnCount}</Text> -{' '}
          <Text as="strong">{lastItemOnCount}</Text> de{' '}
          <Text as="strong">{totalCountOfRecords}</Text>
        </Text>
      </Box>

      <HStack spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {pages}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem number={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </HStack>
    </Stack>
  );
}
