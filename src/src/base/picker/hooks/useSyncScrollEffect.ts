import type {RefObject} from 'react';
import {useEffect} from 'react';
import type {FlatList} from 'react-native';
const useSyncScrollEffect = ({
  listRef,
  valueIndex,
  touching,
}: {
  listRef: RefObject<FlatList>;
  valueIndex: number;
  touching: boolean;
}) => {
  useEffect(() => {
    if (listRef.current == null || touching) {
      return;
    }
    listRef.current.scrollToIndex({
      index: valueIndex,
      animated: true,
    });
  }, [valueIndex]); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useSyncScrollEffect;
