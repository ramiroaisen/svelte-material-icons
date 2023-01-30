<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13.54 22H7.33C6.6 22 6 21.4 6 20.67V5.33C6 4.6 6.6 4 7.33 4H9V2H15V4H16.67C17.4 4 18 4.6 18 5.33V12C14.69 12 12 14.69 12 18C12 19.54 12.58 20.94 13.54 22M18 13L20.25 15.25L18 17.5V16C16.15 16 14.94 17.96 15.76 19.62L14.67 20.71C12.91 18.05 14.81 14.5 18 14.5V13M18 24L15.75 21.75L18 19.5V21C19.85 21 21.06 19.04 20.24 17.38L21.33 16.29C23.09 18.95 21.19 22.5 18 22.5V24" fill="{color}"/></svg>