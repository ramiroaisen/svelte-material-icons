<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = undefined;
  export let ariaHidden = false;
  export let title = null;
  export let desc = null;

  let className = undefined;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13 20H18V22H6V20H11V13.97C8.19 13.7 6 11.34 6 8.46C6 8.15 6.03 7.85 6.08 7.55L7 2H13.54L12.33 4.41L11.79 5.5H13.79L12.33 8.41L11.79 9.5H14L13 12.75L15.67 9.09L16.46 8H14.21L15.67 5.09L16.21 4H14.21L15.21 2H17L17.93 7.55C18 7.85 18 8.15 18 8.46C18 11.34 15.81 13.7 13 13.97V20Z" fill="{color}"/></svg>