import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaBlog } from "../target/types/solana_blog";

describe("solana-blog", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolanaBlog as Program<SolanaBlog>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
