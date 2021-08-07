export interface CheckUpItem {
    check: (itemId: number) => Promise<boolean>
}