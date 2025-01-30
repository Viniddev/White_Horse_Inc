﻿
namespace White_Horse_Inc_Core.Data
{
    public class BaseEntity
    {
        public long Id { get; init; }
        public DateTime CreationDate { get; init; }
        public DateTime UpdateDate { get; private set; }
        public bool IsActive { get; private set; }

        public void UpdateValues()
        {
            UpdateDate = DateTime.Now;
        }

        public void DisableEntity()
        {
            UpdateDate = DateTime.Now;
            IsActive = false;
        }
    }
}
