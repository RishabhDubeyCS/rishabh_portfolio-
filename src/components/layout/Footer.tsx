                                                                                                                                                                         
  import Link from "next/link";                                                                                                                                            
  import { ArrowUpRight, Code2, Globe, Mail } from "lucide-react";                                                                                                                
  import { Button } from "@/components/ui/button";                                                                                                                         
  import {                                                                                                                                                                 
    Card,                                                                                                                                                                  
    CardContent,                                                                                                                                                           
    CardDescription,                                                                                                                                                       
    CardFooter,                                                                                                                                                            
    CardHeader,                                                                                                                                                            
    CardTitle,                                                                                                                                                             
  } from "@/components/ui/card";                                                                                                                                           
                                                                                                                                                                           
  const quickLinks = [                                                                                                                                                     
    { href: "/#home", label: "Home" },                                                                                                                                     
    { href: "/#projects", label: "Projects" },                                                                                                                             
    { href: "/#about", label: "About" },                                                                                                                                   
    { href: "/#contact", label: "Contact" },                                                                                                                               
  ];                                                                                                                                                                       
                                                                                                                                                                           
  const socialLinks = [                                                                                                                                                    
    {                                                                                                                                                                      
      href: "mailto:rishabhdubeycse@gmail.com",                                                                                                                                  
      label: "Email",                                                                                                                                                      
      icon: Mail,                                                                                                                                                          
    },                                                                                                                                                                     
    {                                                                                                                                                                      
      href: "https://github.com/RishabhDubeyCS?tab=repositories",                                                                                                                                         
      label: "GitHub",                                                                                                                                                     
      icon: Code2,                                                                                                                                                         
    },                                                                                                                                                                     
    {                                                                                                                                                                      
      href: "https://www.linkedin.com/in/rishabh-dubey-362500298/",                                                                                                                                   
      label: "LinkedIn",                                                                                                                                                   
      icon: Globe,                                                                                                                                                         
    },                                                                                                                                                                     
  ];                                                                                                                                                                       
                                                                                                                                                                           
  export function Footer() {                                                                                                                                               
    return (                                                                                                                                                               
      <footer className="mt-auto border-t border-border bg-background px-4 py-10 sm:px-6">                                                                                    
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">                                                                                                     
          <Card className="overflow-hidden border border-border bg-card text-foreground shadow-none">                                                                 
            <CardHeader className="gap-3 border-b border-border pb-6">                                                                                                   
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-200/80">                                                               
                <span className="h-px w-10 bg-cyan-600/70 dark:bg-cyan-300/70" />                                                                                                              
                Let&apos;s Build                                                                                                                                           
              </div>                                                                                                                                                       
              <CardTitle className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">                                                                         
                Need a portfolio, landing page, or product interface that feels sharp?                                                                                     
              </CardTitle>                                                                                                                                                 
              <CardDescription className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">                                                                         
                I build modern frontend experiences with Next.js, Tailwind CSS, and                                                                                        
                production-focused UI systems.                                                                                                                             
              </CardDescription>                                                                                                                                           
            </CardHeader>                                                                                                                                                  
                                                                                                                                                                           
            <CardContent className="grid gap-8 py-6 md:grid-cols-[1.4fr_0.8fr_0.8fr]">                                                                                     
              <div className="space-y-4">                                                                                                                                  
                <p className="max-w-md text-sm leading-6 text-muted-foreground/80">
                  Clean structure, responsive layouts, and component-driven design                                                                                         
                  without generic template styling.                                                                                                                        
                </p>                                                                                                                                                       
                <Button                                                                                                                                                    
                  asChild                                                                                                                                                  
                  className="h-11 rounded-full bg-cyan-600 dark:bg-cyan-300 px-5 text-white dark:text-black hover:bg-cyan-700 dark:hover:bg-cyan-200"                                                                              
                >                                                                                                                                                          
                  <Link href="/#contact" scroll={false}>                                                                                                                   
                    Start a Project                                                                                                                                        
                    <ArrowUpRight className="size-4" />                                                                                                                    
                  </Link>                                                                                                                                                  
                </Button>                                                                                                                                                  
              </div>                                                                                                                                                       
                                                                                                                                                                           
              <div className="space-y-3">                                                                                                                                  
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground/60">                                                                                          
                  Quick Links                                                                                                                                              
                </p>                                                                                                                                                       
                <div className="flex flex-col gap-2">                                                                                                                      
                  {quickLinks.map((link) => (                                                                                                                              
                    <Link                                                                                                                                                  
                      key={link.href}                                                                                                                                      
                      href={link.href}                                                                                                                                     
                      scroll={false}                                                                                                                                       
                      className="text-sm text-muted-foreground transition hover:text-cyan-600 dark:hover:text-cyan-200"                                                                                     
                    >                                                                                                                                                      
                      {link.label}                                                                                                                                         
                    </Link>                                                                                                                                                
                  ))}                                                                                                                                                      
                </div>                                                                                                                                                     
              </div>                                                                                                                                                       
                                                                                                                                                                           
              <div className="space-y-3">                                                                                                                                  
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground/60">                                                                                          
                  Connect                                                                                                                                                  
                </p>                                                                                                                                                       
                <div className="flex flex-col gap-2">                                                                                                                      
                  {socialLinks.map(({ href, label, icon: Icon }) => (                                                                                                      
                    <Link                                                                                                                                                  
                      key={label}                                                                                                                                          
                      href={href}                                                                                                                                          
                      target="_blank"                                                                                                                                      
                      rel="noreferrer"                                                                                                                                     
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-cyan-600 dark:hover:text-cyan-200"                                                      
                    >                                                                                                                                                      
                      <Icon className="size-4" />                                                                                                                          
                      {label}                                                                                                                                              
                    </Link>                                                                                                                                                
                  ))}                                                                                                                                                      
                </div>                                                                                                                                                     
              </div>                                                                                                                                                       
            </CardContent>                                                                                                                                                 

            <CardFooter className="flex flex-col items-start justify-between gap-3 border-border bg-muted/20 text-xs text-muted-foreground/60 sm:flex-row sm:items-center">     
              <p>(c) 2026 Rishabh Dubey. Built with Next.js and shadcn/ui.</p>
              <Link href="/#home" scroll={false} className="transition hover:text-cyan-600 dark:hover:text-cyan-200">                                                                               
                Back to top                                                                                                                                                
              </Link>                                                                                                                                                      
            </CardFooter>                                                                                                                                                  
          </Card>                                                                                                                                                          
        </div>                                                                                                                                                             
      </footer>                                                                                                                                                            
    );                                                                                                                                                                     
  }                                                          