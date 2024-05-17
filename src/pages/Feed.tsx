import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

interface FlickerFeedItem {
  title: string;
  media: {
    m: string;
  }
}

const Feed = () => {
  const [flickerFeed, setFlickerFeed] = useState<FlickerFeedItem[]>([]);

  useEffect(() => {

    (async () => {
      try {
        const response = await fetch('https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1');
        const result = await response.json();
        setFlickerFeed(result.items);
      } catch (ex) {
        console.log('There was an issue fetching the feed', ex)
      }
    })()

  }, [])

  return (
      <div className="flex min-h-screen w-full flex-col">
        <div className="flex flex-col items-center gap-y-5">
          {flickerFeed.map(item => (
            <Card className="w-6/12">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <img className="w-full" src={item.media.m} />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                    </DialogHeader>
                    <div className="w-full">
                      <img className="w-full" src={item.media.m} />
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  )
}

export default Feed;