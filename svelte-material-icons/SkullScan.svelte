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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2 0C.9 0 0 .9 0 2V6H2V2H6V0H2M18 0V2H22V6H24V2C24 .9 23.1 0 22 0H18M12 3C7.6 3 4 6.6 4 11C4 13.5 5.2 15.8 7 17.2V21H9V18H11V21H13V18H15V21H17V17.2C18.8 15.7 20 13.5 20 11C20 6.6 16.4 3 12 3M8 14C6.9 14 6 13.1 6 12S6.9 10 8 10 10 10.9 10 12 9.1 14 8 14M10.5 16L12 13L13.5 16H10.5M16 14C14.9 14 14 13.1 14 12S14.9 10 16 10 18 10.9 18 12 17.1 14 16 14M0 18V22C0 23.1 .9 24 2 24H6V22H2V18H0M22 18V22H18V24H22C23.1 24 24 23.1 24 22V18H22Z" fill="{color}"/></svg>