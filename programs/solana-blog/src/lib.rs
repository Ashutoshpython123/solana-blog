use anchor_lang::prelude::*;

declare_id!("CRFCZZVZoANEiovHnGxmiAVij1WhhtcCZgXJKSw2BAPe");

#[program]
pub mod solana_blog {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

#[account]
pub struct BlogAccount {
    pub authority : Pubkey,
    pub latest_post : Vec<u8>,
}