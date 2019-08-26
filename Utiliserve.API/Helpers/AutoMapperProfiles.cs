using System.Linq;
using AutoMapper;
using Utiliserve.API.Dtos;
using Utiliserve.API.Models;

namespace Utiliserve.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(){
            //Auto maps from the model to the DTO if using the same name
            // for members lets you specify extra details, in this case, we made up a photo url for the DTO and manually assigned it
            CreateMap<User, UserForListDto>()
            .ForMember(dest => dest.PhotoUrl, opt =>{
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
            })
            .ForMember(dest => dest.Age, opt =>{
                opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
            });
            CreateMap<User, UserForDetailedDto>()
            .ForMember(dest => dest.PhotoUrl, opt =>{
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
            })
            .ForMember(dest => dest.Age, opt =>{
                opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
            });
            CreateMap<Photo, PhotosForDetailedDto>();

            //Backwards because it's going form user submit to DB?
            CreateMap<UserForUpdateDto, User>();
        }
    }
}