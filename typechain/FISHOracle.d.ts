/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface FISHOracleInterface extends ethers.utils.Interface {
  functions: {
    "FISH()": FunctionFragment;
    "FISH_USDC()": FunctionFragment;
    "PERIOD()": FunctionFragment;
    "_get(uint32)": FunctionFragment;
    "get(bytes)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "name(bytes)": FunctionFragment;
    "pairInfo()": FunctionFragment;
    "peek(bytes)": FunctionFragment;
    "peekSpot(bytes)": FunctionFragment;
    "symbol(bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "FISH", values?: undefined): string;
  encodeFunctionData(functionFragment: "FISH_USDC", values?: undefined): string;
  encodeFunctionData(functionFragment: "PERIOD", values?: undefined): string;
  encodeFunctionData(functionFragment: "_get", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "get", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "pairInfo", values?: undefined): string;
  encodeFunctionData(functionFragment: "peek", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "peekSpot", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "symbol", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "FISH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "FISH_USDC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PERIOD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_get", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pairInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peek", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peekSpot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;

  events: {};
}

export class FISHOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FISHOracleInterface;

  functions: {
    FISH(overrides?: CallOverrides): Promise<[string]>;

    FISH_USDC(overrides?: CallOverrides): Promise<[string]>;

    PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    _get(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    get(
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _FISH_USDC: string,
      _FISH: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    pairInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber] & {
        priceCumulativeLast: BigNumber;
        blockTimestampLast: number;
        priceAverage: BigNumber;
      }
    >;

    peek(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    peekSpot(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    symbol(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
  };

  FISH(overrides?: CallOverrides): Promise<string>;

  FISH_USDC(overrides?: CallOverrides): Promise<string>;

  PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  _get(
    blockTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  get(
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _FISH_USDC: string,
    _FISH: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  pairInfo(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, BigNumber] & {
      priceCumulativeLast: BigNumber;
      blockTimestampLast: number;
      priceAverage: BigNumber;
    }
  >;

  peek(
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  peekSpot(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  symbol(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    FISH(overrides?: CallOverrides): Promise<string>;

    FISH_USDC(overrides?: CallOverrides): Promise<string>;

    PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    _get(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    initialize(
      _FISH_USDC: string,
      _FISH: string,
      overrides?: CallOverrides
    ): Promise<void>;

    name(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    pairInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber] & {
        priceCumulativeLast: BigNumber;
        blockTimestampLast: number;
        priceAverage: BigNumber;
      }
    >;

    peek(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    peekSpot(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    symbol(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    FISH(overrides?: CallOverrides): Promise<BigNumber>;

    FISH_USDC(overrides?: CallOverrides): Promise<BigNumber>;

    PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    _get(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get(
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _FISH_USDC: string,
      _FISH: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    pairInfo(overrides?: CallOverrides): Promise<BigNumber>;

    peek(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    peekSpot(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    symbol(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    FISH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FISH_USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _get(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get(
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _FISH_USDC: string,
      _FISH: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pairInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peek(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    peekSpot(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}