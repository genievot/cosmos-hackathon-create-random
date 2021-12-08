// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendReqRandomval } from "./types/random/tx";
import { MsgCreateRandom } from "./types/random/tx";
const types = [
    ["/genievot.random.random.MsgSendReqRandomval", MsgSendReqRandomval],
    ["/genievot.random.random.MsgCreateRandom", MsgCreateRandom],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgSendReqRandomval: (data) => ({ typeUrl: "/genievot.random.random.MsgSendReqRandomval", value: data }),
        msgCreateRandom: (data) => ({ typeUrl: "/genievot.random.random.MsgCreateRandom", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
