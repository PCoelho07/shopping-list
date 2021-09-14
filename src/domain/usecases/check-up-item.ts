export interface CheckUpItem {
    check: (itemId: string) => Promise<boolean>
}