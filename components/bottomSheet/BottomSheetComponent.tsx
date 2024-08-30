import React, { ReactNode, forwardRef, useCallback } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

export type Ref = BottomSheetModal;

type BottomSheetProps = {
  children: ReactNode;
};

export const BottomSheetComponent = forwardRef<Ref, BottomSheetProps>(
  (props, ref) => {
    const { children } = props;

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        backdropComponent={renderBackdrop}
        snapPoints={[]}
        enableDynamicSizing={true}
        handleComponent={null}
      >
        <BottomSheetScrollView>{children}</BottomSheetScrollView>
      </BottomSheetModal>
    );
  }
);
