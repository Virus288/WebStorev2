import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { MainDispatch, RootMainState } from '../tools/store';

export const useMainDispatch = (): MainDispatch => useDispatch<MainDispatch>();

export const useMainSelector: TypedUseSelectorHook<RootMainState> = useSelector;
